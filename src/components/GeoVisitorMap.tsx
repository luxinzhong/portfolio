"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { supabase } from "@/lib/supabase";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const LOGGED_KEY = "visitor_geo_logged";
const TTL_MS = 24 * 60 * 60 * 1000;

type Visitor = {
  id: string;
  lat: number;
  lng: number;
  country: string | null;
  city: string | null;
};

export default function GeoVisitorMap() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    run();
  }, []);

  async function run() {
    if (supabase) {
      const lastLogged = localStorage.getItem(LOGGED_KEY);
      const shouldLog = !lastLogged || Date.now() - +lastLogged > TTL_MS;

      if (shouldLog) {
        try {
          const geo = await fetch("https://ipapi.co/json/").then((r) =>
            r.json()
          );
          if (geo.latitude && geo.longitude) {
            await supabase.from("visitor_locations").insert({
              lat: +Number(geo.latitude).toFixed(2),
              lng: +Number(geo.longitude).toFixed(2),
              country: geo.country_name ?? null,
              city: geo.city ?? null,
            });
            localStorage.setItem(LOGGED_KEY, String(Date.now()));
          }
        } catch {
          // Never break the page for analytics
        }
      }

      const { data } = await supabase
        .from("visitor_locations")
        .select("id, lat, lng, country, city");
      if (data) setVisitors(data as Visitor[]);
    }

    setLoading(false);
  }

  const countryCount = new Set(
    visitors.map((v) => v.country).filter(Boolean)
  ).size;

  if (loading) {
    return <div className="h-[420px] animate-pulse rounded bg-zinc-900/50" />;
  }

  return (
    <div className="w-full">
      <ComposableMap
        projectionConfig={{ scale: 145, center: [0, 15] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#27272a",
                    stroke: "#3f3f46",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#3f3f46",
                    stroke: "#52525b",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  pressed: { fill: "#27272a", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {visitors.map((v) => (
          <Marker key={v.id} coordinates={[v.lng, v.lat]}>
            <circle r={7} fill="#f59e0b" fillOpacity={0.15} />
            <circle r={3} fill="#f59e0b" fillOpacity={0.9} />
          </Marker>
        ))}
      </ComposableMap>

      <p className="mt-2 text-center text-xs tracking-wide text-zinc-500">
        {visitors.length === 0 ? (
          "No visits logged yet."
        ) : (
          <>
            {visitors.length}{" "}
            {visitors.length === 1 ? "visitor" : "visitors"}
            {countryCount > 0 &&
              ` · ${countryCount} ${countryCount === 1 ? "country" : "countries"}`}
          </>
        )}
      </p>
    </div>
  );
}
