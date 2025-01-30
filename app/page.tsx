"use client"

import { Button } from "@/components/ui/button"
import { Battery, CheckCircle, Clock, Bell } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#eaeaea]">
      <header className="bg-[#eaeaea] shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={"relative h-6 w-6"}>
              <Image src={"/favicon.png"} alt={""} fill={true} />
            </div>
            <span className="text-xl font-bold text-[#1a1a1a]">BatterySupporter</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#features" className="text-[#1a1a1a] hover:text-[#e00606]">
                  機能
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-[#1a1a1a] hover:text-[#e00606]">
                  メリット
                </a>
              </li>
              <li>
                <a href="https://battery-supporter-web-ver-2.vercel.app" className="text-[#1a1a1a] hover:text-[#e00606]">
                  始める
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-[#d9d9d9] text-[#1a1a1a] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">バッテリー管理と生産性の革新</h1>
            <p className="text-xl mb-8">Google Tasksとバッテリー残量を連携させ、効率的な作業をサポート</p>
            <Button size="lg" className="bg-[#e00606] text-white hover:bg-[#e00606]/90" onClick={() => open("https://battery-supporter-web-ver-2.vercel.app")}>
              今すぐ始める
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-[#eaeaea]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a1a1a]">主な機能</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#d9d9d9] p-6 rounded-lg shadow-md">
                <CheckCircle className="h-12 w-12 text-[#e00606] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">タスク分類</h3>
                <p className="text-[#1a1a1a]">Google Tasksのタスクをバッテリー消費の観点から自動分類</p>
              </div>
              <div className="bg-[#d9d9d9] p-6 rounded-lg shadow-md">
                <Battery className="h-12 w-12 text-[#e00606] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">バッテリー監視</h3>
                <p className="text-[#1a1a1a]">PCのバッテリー残量をリアルタイムで監視し分析</p>
              </div>
              <div className="bg-[#d9d9d9] p-6 rounded-lg shadow-md">
                <Bell className="h-12 w-12 text-[#e00606] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">スマート通知</h3>
                <p className="text-[#1a1a1a]">タスク状況とバッテリー残量に基づいた最適なアドバイスを通知</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 bg-[#d9d9d9]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#1a1a1a]">BatterySupporterのメリット</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[#e00606] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">生産性の向上</h3>
                  <p className="text-[#1a1a1a]">バッテリー残量を考慮したタスク管理で、作業の中断を最小限に</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Battery className="h-6 w-6 text-[#e00606] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">バッテリー寿命の延長</h3>
                  <p className="text-[#1a1a1a]">適切な充電タイミングの提案で、バッテリーの健康を維持</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-[#e00606] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">ストレス軽減</h3>
                  <p className="text-[#1a1a1a]">バッテリー切れの心配なく、タスクに集中できる環境を提供</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Bell className="h-6 w-6 text-[#e00606] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">スマートな作業管理</h3>
                  <p className="text-[#1a1a1a]">AIによる最適なタスクとバッテリー管理の提案で効率アップ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="bg-[#e00606] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">生産性を最大化する新しい方法</h2>
            <p className="text-xl mb-8">BatterySupporterで、スマートな作業環境を手に入れましょう</p>
            <Button size="lg" className="bg-white text-[#e00606] hover:bg-[#eaeaea]" onClick={() => open("https://battery-supporter-web-ver-2.vercel.app")}>
              無料で始める
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">リンク</h3>
              <ul className="text-sm">
                <li>
                  <a href="https://battery-supporter-web-ver-2.vercel.app/pages/privacy-policy" className="hover:text-[#e00606]">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="https://battery-supporter-web-ver-2.vercel.app/pages/user-agreement" className="hover:text-[#e00606]">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="https://battery-supporter-web-ver-2.vercel.app/#help" className="hover:text-[#e00606]">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">ソリューション</h3>
              <div className="flex space-x-4">
                <a href="https://battery-supporter-web-ver-2.vercel.app" className="hover:text-[#e00606]">
                  BatterySupporter
                </a>
                <a href="https://chi1180.github.io/BatterySupporter-documentation/starter.html" className="hover:text-[#e00606]">
                  Documentation
                </a>
                <a href="#" className="hover:text-[#e00606]">
                  Website
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">BatterySupporter</h3>
              <p className="text-sm text-gray-400">生産性とバッテリー管理の革新的なソリューション</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">© 2025 BatterySupporter. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

