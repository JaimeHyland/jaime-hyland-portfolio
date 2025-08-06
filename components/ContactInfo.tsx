"use client";

import { useEffect, useState } from "react";
import { ProjLink } from "./ProjLink";

export function EmailDisplay() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userFirst = "jaime";
    const userLast = "hyland";
    const domainFirst = "language";
    const domainLast = "landscapes";
    const domainTLD = "com";
    setEmail(`${userFirst}.${userLast}@${domainFirst}-${domainLast}.${domainTLD}`);
  }, []);

  return <ProjLink href={`mailto:${email}`}>{email}</ProjLink>;
}

export function MobileDisplay() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const parts = ["+49", "177", "2570734"];
    setPhone(parts.join(" "));
  }, []);

  return <span>{phone}</span>;
}

export function LandlineDisplay() {
  const [landline, setLandline] = useState("");

  useEffect(() => {
    const parts = ["+49", "30", "48628468"];
    setLandline(parts.join(" "));
  }, []);

  return <span>{landline}</span>;
}
