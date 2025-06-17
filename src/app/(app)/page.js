"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useActionState } from "react";
import { loginAction } from "./action";
import {
  ChevronDown,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Users,
} from "lucide-react";

export default function Home() {
  const [_, action, pending] = useActionState(loginAction, null);
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Section */}
            <div className="mb-8 animate-pulse">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Star className="w-4 h-4 mr-2" />
                Introducing Notip!
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Satu Web
              <br />
              untuk Semua
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Titipan
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Catat, simpan, dan kelola semua titipan makanan dengan sistem yang
              rapi dan permanen. Tak ada lagi salah titip atau drama “tadi kamu
              nitip apa ya?”.
            </p>

            <div className="flex items-center justify-center">
              <Card className="w-[500px]  bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <CardContent>
                  <form className="space-y-2" action={loginAction}>
                    <p className="text-gray-200">
                      Sebelum nulis note, boleh tau namamu?
                    </p>
                    <Input name="username" placeholder="username" />
                    <Button
                      disable={pending}
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    >
                      Lanjut
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Tanpa Login</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Gratis Sepuasnya</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
