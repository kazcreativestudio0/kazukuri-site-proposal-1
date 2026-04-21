/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Check, 
  ChevronRight, 
  Server, 
  Search, 
  Smartphone, 
  BarChart3, 
  Clock, 
  Zap,
  HelpCircle,
  Menu,
  X
} from "lucide-react";

const Navbar = () => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-onamae-blue text-white p-1 rounded font-black text-xs">KAZ</div>
        <h1 className="font-black text-xl tracking-tighter text-onamae-blue">CREATIVE STUDIO</h1>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-bold">
        <a href="#features" className="hover:text-onamae-blue">特長</a>
        <a href="#comparison" className="hover:text-onamae-blue">比較</a>
        <a href="#price" className="hover:text-onamae-blue">料金</a>
        <a href="#contact" className="bg-onamae-orange text-white px-6 py-2 rounded font-black hover:brightness-105">お問い合わせ</a>
      </div>
      <button className="md:hidden">
        <Menu className="w-6 h-6 text-onamae-blue" />
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="section-bg-blue relative overflow-hidden">
    <div className="max-w-7xl mx-auto section-padding flex flex-col items-center text-center relative z-10">
      <div className="bg-white/10 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full mb-6 border border-white/20">
        制作会社に依頼する前に、比較してみてください
      </div>
      <h2 className="text-3xl md:text-6xl font-black leading-tight mb-8">
        LP制作の正解がここにある。
      </h2>
      <p className="text-lg md:text-xl font-medium mb-12 opacity-90 max-w-2xl">
        KAZ CREATIVE STUDIOのLP制作事業は、<br className="hidden md:block" />
        単なるデザインではなく「売れる仕組み」を最短距離で構築します。
      </p>
      
      <div className="bg-white rounded-lg p-2 md:p-4 w-full max-w-2xl flex flex-col md:flex-row gap-2 box-shadow-onamae">
        <div className="flex-1 flex items-center px-4 gap-3 border border-gray-200 rounded md:border-none">
          <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
          <input 
            type="text" 
            placeholder="ブランド名やサービス名を入力" 
            className="w-full py-4 text-slate-900 font-bold focus:outline-none placeholder:text-gray-300"
          />
        </div>
        <button className="cta-button w-full md:w-auto md:px-12">
          無料相談を申し込む <ChevronRight />
        </button>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold opacity-80">
        <span className="flex items-center gap-1"><Check className="w-4 h-4 text-onamae-orange" /> 最短1週間で公開</span>
        <span className="flex items-center gap-1"><Check className="w-4 h-4 text-onamae-orange" /> ドメイン・サーバー管理込み</span>
        <span className="flex items-center gap-1"><Check className="w-4 h-4 text-onamae-orange" /> コンサルティング無料</span>
      </div>
    </div>
    
    {/* Decorative background curves */}
    <div className="absolute top-1/2 left-0 w-full h-full bg-white/5 skew-y-6 transform translate-y-20 pointer-events-none" />
  </section>
);

const Stats = () => (
  <div className="bg-onamae-navy py-6 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-white">
      <div className="flex flex-col items-center">
        <span className="text-xs font-bold opacity-60">累計制作数</span>
        <span className="text-2xl font-black">500<span className="text-sm font-bold">件突破</span></span>
      </div>
      <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
      <div className="flex flex-col items-center">
        <span className="text-xs font-bold opacity-60">顧客満足度</span>
        <span className="text-2xl font-black">98.5<span className="text-sm font-bold">%</span></span>
      </div>
      <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
      <div className="flex flex-col items-center">
        <span className="text-xs font-bold opacity-60">継続利用率</span>
        <span className="text-2xl font-black">92<span className="text-sm font-bold">%</span></span>
      </div>
      <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
      <div className="flex items-center gap-4 bg-white/10 px-6 py-2 rounded-full">
        <span className="text-sm font-black">No.1を獲得!</span>
        <div className="flex gap-1 text-onamae-orange italic font-black">
          {"★".repeat(5)}
        </div>
      </div>
    </div>
  </div>
);

const Problems = () => (
  <section className="section-padding bg-onamae-bg">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-onamae-blue font-black text-sm tracking-[0.2em] mb-4 uppercase">Problem</h3>
        <h2 className="text-2xl md:text-4xl font-black text-onamae-navy">こんなお悩みありませんか？</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Clock, text: "制作会社に見積もりを取ったが、完成まで数ヶ月かかると言われた..." },
          { icon: Smartphone, text: "自社で作ってみたが、スマホで見ると崩れていて注文に繋がらない。" },
          { icon: HelpCircle, text: "デザインは綺麗だが、ターゲットに何が強みなのか伝わっていない気がする。" }
        ].map((p, i) => (
          <div key={i} className="bg-white p-8 rounded-xl box-shadow-onamae relative flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-onamae-light-blue rounded-full mb-6 flex items-center justify-center text-onamae-blue">
              <p.icon className="w-8 h-8" />
            </div>
            <p className="font-bold leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-onamae-blue font-black text-xl">
        その悩み、KAZ CREATIVE STUDIOがすべて解決します。
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section id="comparison" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-onamae-navy">LP制作サービスを徹底比較</h2>
        <p className="mt-4 text-gray-500 font-medium">制作会社 vs 自作ツール vs KAZ CREATIVE STUDIO</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-6 border border-gray-200 text-left">サービス内容</th>
              <th className="p-6 border border-gray-200 bg-onamae-light-blue text-onamae-blue font-black">KAZ CREATIVE</th>
              <th className="p-6 border border-gray-200 text-gray-500">一般的な制作会社</th>
              <th className="p-6 border border-gray-200 text-gray-500">自作ツール</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            <tr>
              <td className="p-6 border border-gray-200">戦略設計・構成案</td>
              <td className="p-6 border border-gray-200 text-center text-onamae-blue text-2xl">◎</td>
              <td className="p-6 border border-gray-200 text-center text-gray-400">○</td>
              <td className="p-6 border border-gray-200 text-center text-red-500">×</td>
            </tr>
            <tr>
              <td className="p-6 border border-gray-200">制作スピード</td>
              <td className="p-6 border border-gray-200 text-center text-onamae-blue text-2xl">最短1週間</td>
              <td className="p-6 border border-gray-200 text-center text-gray-400">1〜3ヶ月</td>
              <td className="p-6 border border-gray-200 text-center text-gray-400">数日〜数週</td>
            </tr>
            <tr>
              <td className="p-6 border border-gray-200">ドメイン・サーバー管理</td>
              <td className="p-6 border border-gray-200 text-center text-onamae-blue text-2xl">全てお任せ</td>
              <td className="p-6 border border-gray-200 text-center text-gray-400">別途費用</td>
              <td className="p-6 border border-gray-200 text-center text-gray-400">自身で管理</td>
            </tr>
            <tr>
              <td className="p-6 border border-gray-200">初期費用</td>
              <td className="p-6 border border-gray-200 text-center text-onamae-blue text-2xl">29.8万円〜</td>
              <td className="p-6 border border-gray-200 text-center text-gray-400">50万円〜</td>
              <td className="p-6 border border-gray-200 text-center text-onamae-blue text-2xl">0円</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const BusinessInfo = () => (
  <section className="section-padding bg-onamae-blue text-white">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-black mb-8">「売れる」1ページを、<br />共につくります。</h2>
        <p className="leading-loose opacity-90 font-medium">
          LP制作事業は、商品やサービスの魅力を整理して、1ページで伝わる形にまとめ、
          問い合わせや申込みにつなげるための制作事業です。<br /><br />
          ただ見た目をきれいにするだけではなく、誰に向けたサービスなのか、何が強みなのか、
          どうすると相談したくなるのかを整理して、伝わる順番でページに落とし込みます。
        </p>
      </div>
      <div className="w-full md:w-80 h-80 rounded-2xl bg-white/10 flex items-center justify-center p-8 border border-white/20">
        <Zap className="w-32 h-32 text-onamae-orange animate-pulse" />
      </div>
    </div>
  </section>
);

const PricePlans = () => (
  <section id="price" className="section-padding bg-onamae-bg">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-black text-onamae-navy uppercase tracking-tighter">Plan & Pricing</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { name: "ライトプラン", price: "298,000", features: ["1ページ構成", "スマホ最適化", "ヒアリング1回", "公開後の軽微な修正無料"] },
          { name: "スタンダードプラン", price: "498,000", features: ["1ページ構成", "CV特化構成案", "分析ツール導入", "ヒアリング無制限", "広告運用相談"] }
        ].map((plan, i) => (
          <div key={i} className={`bg-white p-10 rounded-2xl border-4 ${i === 1 ? "border-onamae-blue" : "border-transparent"} box-shadow-onamae relative overflow-hidden`}>
            {i === 1 && (
              <div className="absolute top-0 right-0 bg-onamae-blue text-white px-4 py-1 text-xs font-black rounded-bl">おすすめ</div>
            )}
            <h4 className="text-xl font-bold mb-6">{plan.name}</h4>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-black text-onamae-blue">¥{plan.price}</span>
              <span className="text-gray-500 text-sm ml-2">（税込）〜</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 font-medium">
                  <Check className="w-5 h-5 text-onamae-blue" /> {f}
                </li>
              ))}
            </ul>
            <button className="cta-button w-full">プランを選択</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-onamae-navy text-white pt-16 pb-8 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
      <div>
        <div className="bg-onamae-blue text-white p-1 rounded font-black text-xs inline-block mb-4">KAZ</div>
        <div className="font-black text-xl mb-6">CREATIVE STUDIO</div>
        <p className="text-sm opacity-60 leading-relaxed max-w-xs">
          ホームページ制作の正解をすべてのビジネスへ。成果にこだわるクリエイティブをお届けします。
        </p>
      </div>
      <div>
        <h5 className="font-black text-lg mb-6">Menu</h5>
        <ul className="space-y-4 text-sm opacity-80">
          <li><a href="#" className="hover:text-onamae-orange transition-colors underline-offset-4 hover:underline">特長・強み</a></li>
          <li><a href="#" className="hover:text-onamae-orange transition-colors underline-offset-4 hover:underline">サービス比較</a></li>
          <li><a href="#" className="hover:text-onamae-orange transition-colors underline-offset-4 hover:underline">料金プラン</a></li>
          <li><a href="#" className="hover:text-onamae-orange transition-colors underline-offset-4 hover:underline">よくある質問</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-black text-lg mb-6">Contact</h5>
        <p className="text-sm opacity-80 mb-4 whitespace-pre-line leading-loose">
          メール: kaz.creative.studio0@gmail.com
          所在地: 東京都渋谷区（リモート対応可）
        </p>
        <div className="flex gap-4">
           <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Zap className="w-5 h-5" /></a>
           <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20"><Search className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest opacity-40">
      <p>© 2026 KAZ CREATIVE STUDIO. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-8 mt-6 md:mt-0">
        <a href="#">法に基づく表記</a>
        <a href="#">プライバシーポリシー</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problems />
        <BusinessInfo />
        <Comparison />
        <PricePlans />
      </main>
      <Footer />

      {/* Floating Sticky CTA on Mobile */}
      <div className={`fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 md:hidden z-50 transition-transform ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <button className="cta-button w-full py-4 text-xs">
          無料相談を申し込む
        </button>
      </div>
    </div>
  );
}
