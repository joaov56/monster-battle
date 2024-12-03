"use client"

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MonstersTable } from "@/components/MonstersTable";

export default function Home() {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-4/5 h-3/5">
        <CardHeader>
          <CardTitle>Monstros</CardTitle>
        </CardHeader>
        <CardContent>
          <MonstersTable />
        </CardContent>
      </Card>
    </div>
  );
}
