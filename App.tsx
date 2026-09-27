  import { CheckCircle2, Lock, Zap, Star, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

const mockups = [
  '/media_1790542334883.png', // Beauty (Luana Silva)
  '/media_1790542334972.png', // Travel
  '/media_1790542350297.png', // Spotify
  '/media_1790542350313.png', // Gamer
  '/media_1790542350335.png', // Netflix
  '/media_1790545695716.png', // Sucession/Spotify
  '/media_1790545696072.png', // Fotografa
  '/media_1790545696142.png', // Burger
  '/media_1790545711240.png', // Audiovisual
  '/media_1790545727155.png'  // Advogado
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-['Instrument_Serif'] selection:bg-edNeon/30 overflow-x-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-edNeon/10 blur-[120px] pointer-events-none rounded-full"></div>
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-6 md:px-10 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="italic text-white text-2xl tracking-widest font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-edNeon rounded-full animate-pulse-glow"></div>
          <div><span className="text-edNeon">ED</span>CRIA<span className="font-sans text-xs uppercase opacity-50 tracking-[0.3em] not-italic ml-1">Studio</span></div>
        </div>
        <a href="#oferta" className="hidden md:flex bg-white/5 hover:bg-white/10 border border-white/10 rounded-full items-center px-6 py-2 gap-8 font-sans text-xs tracking-widest uppercase transition-colors">
          Acessar o Cofre
        </a>
      </nav>

      {/* 1 & 2. NOME E PROMESSA (HERO) */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center pt-32 pb-16 px-6 md:px-10 max-w-7xl mx-auto z-10">
        
        {/* Copy (Left) */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="liquid-glass rounded-full px-4 py-1.5 mb-6 border border-edNeon/30 shadow-[0_0_15px_rgba(8,223,240,0.2)]">
            <span className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase font-bold text-edNeon">
              O Segredo dos Grandes Players (Liberado)
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tight mb-6">
            O Fim do Linktree<br/><span className="italic opacity-90 text-transparent bg-clip-text bg-gradient-to-r from-edNeon to-[#008f9b]">Amador.</span>
          </h1>
          
          <p className="font-sans text-base sm:text-lg leading-relaxed opacity-70 font-light max-w-lg mb-10">
            Enquanto você perde vendas com links feios e travados, a elite usa vitrines cinematográficas. Transforme sua Bio em um ecossistema de alto padrão em 5 minutos com mais de 50 templates 100% editáveis no Canva.
          </p>
          
          <a href="#oferta" className="bg-edNeon hover:bg-edBlue text-black text-sm px-8 py-4 rounded-full font-sans font-extrabold tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(8,223,240,0.3)] hover:shadow-[0_0_50px_rgba(8,223,240,0.5)] hover:scale-105 flex items-center gap-3">
            Explorar o Arsenal <ArrowRight size={18} />
          </a>
          
          <div className="mt-8 flex items-center gap-4 font-sans text-xs text-white/50">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border border-[#050505] bg-white/10 backdrop-blur-sm"></div>)}
            </div>
            <span>Junte-se a +3.400 criadores.</span>
          </div>
        </div>

        {/* Floating Phones (Right) */}
        <div className="flex-1 relative h-[500px] w-full mt-16 md:mt-0 hidden md:flex items-center justify-center">
          {/* Phone 1 (Left) - Netflix */}
          <div className="absolute left-[10%] z-10 w-[220px] h-[450px] rounded-[2rem] border-[2px] border-edNeon/70 bg-black overflow-hidden shadow-[0_0_25px_rgba(8,223,240,0.15)] animate-float-delayed transform -rotate-6">
            <img src={mockups[4]} alt="Template" className="w-full h-auto object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          </div>
          
          {/* Phone 2 (Center - Main) - Luana Silva (Beauty) */}
          <div className="absolute z-20 w-[240px] h-[490px] rounded-[2rem] border-[3px] border-edNeon bg-black overflow-hidden shadow-[0_0_40px_rgba(8,223,240,0.4)] animate-float">
            <img src={mockups[0]} alt="Template Luana" className="w-full h-auto object-cover object-top" />
          </div>
          
          {/* Phone 3 (Right) - Spotify */}
          <div className="absolute right-[10%] z-10 w-[220px] h-[450px] rounded-[2rem] border-[2px] border-edNeon/70 bg-black overflow-hidden shadow-[0_0_25px_rgba(8,223,240,0.15)] animate-float-delayed transform rotate-6">
            <img src={mockups[2]} alt="Template" className="w-full h-auto object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
          </div>
        </div>
      </section>

      {/* 3 & 4. MECANISMO E PROVA (Carrossel Infinito) */}
      <section className="py-20 bg-black relative border-y border-white/5 overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl italic mb-4">O Cofre <span className="text-edNeon">Aberto</span></h2>
          <p className="font-sans text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            Designs que parecem custar milhares de reais, arquitetados sob princípios de psicologia de cores e neuro-design. Eles geram desejo absoluto antes mesmo do clique, e agora são 100% seus.
          </p>
        </div>

        {/* Marquee Row 1 (Esquerda) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-6">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-marquee-left whitespace-nowrap w-[200%]">
            {/* Array intercalado para row 1 */}
            {[...mockups.slice(0, 5), ...mockups.slice(0, 5), ...mockups.slice(0, 5)].map((src, idx) => (
              <li key={idx} className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden border-[2px] border-edNeon/50 shadow-[0_0_15px_rgba(8,223,240,0.1)] hover:border-edNeon hover:shadow-[0_0_25px_rgba(8,223,240,0.3)] transition-all duration-300 group cursor-pointer">
                <img src={src} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-edNeon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Marquee Row 2 (Direita) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-marquee-right whitespace-nowrap w-[200%]">
            {/* Array intercalado para row 2 */}
            {[...mockups.slice(5, 10), ...mockups.slice(5, 10), ...mockups.slice(5, 10)].map((src, idx) => (
              <li key={idx} className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden border-[2px] border-edNeon/50 shadow-[0_0_15px_rgba(8,223,240,0.1)] hover:border-edNeon hover:shadow-[0_0_25px_rgba(8,223,240,0.3)] transition-all duration-300 group cursor-pointer">
                <img src={src} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-edNeon/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5, 6, 7. ESCASSEZ, PROVA SOCIAL E AUTORIDADE */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Star size={40} className="mx-auto mb-6 text-edNeon" />
          <h2 className="text-4xl md:text-5xl italic mb-8">Criado pelo <span className="text-edNeon">EdCria Studio</span></h2>
          <p className="font-sans text-lg text-white/70 font-light mb-12">
            Nós cansamos de ver perfis gigantes perdendo vendas por usarem links amadores. Gastamos semanas desenhando a engenharia visual de páginas que os maiores influenciadores do mercado pagam R$ 5.000 para construir. <b>Hoje, essas vitrines estão disponíveis para você editar pelo celular.</b>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans border-t border-white/10 pt-12">
            <div>
              <div className="text-3xl font-bold text-edNeon mb-2">50+</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-edNeon mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Canva Grátis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-edNeon mb-2">0</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Mensalidades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-edNeon mb-2">5 min</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Para Lançar</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 & 9. PREÇO (OFERTA) E BÔNUS */}
      <section id="oferta" className="relative py-32 px-6 bg-[#030303] overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-edNeon/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-4 italic">Escolha o seu <span className="text-edNeon">Arsenal</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* START CARD */}
            <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-[2rem] border border-white/10 flex flex-col relative hover:border-white/20 transition-colors">
              <div className="font-sans uppercase tracking-[0.2em] text-xs text-white/50 mb-4">Pack Básico</div>
              <h3 className="text-4xl italic mb-2">Start Bio</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-sans text-xl text-white/50">R$</span>
                <span className="text-6xl font-bold">9,90</span>
              </div>
              
              <ul className="font-sans space-y-4 mb-12 flex-1 text-sm text-white/70">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white/30"/> 20 Templates de Alta Conversão</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white/30"/> Design Focado em Engajamento</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white/30"/> 100% Editável no Canva (Celular/PC)</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white/30"/> Acesso Vitalício</li>
              </ul>

              <a href="https://pay.kiwify.com.br/LL1fV9z" target="_blank" className="w-full py-4 rounded-full border border-white/20 text-center font-sans uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                Garantir Pack Start
              </a>
            </div>

            {/* PREMIUM CARD */}
            <div className="bg-gradient-to-b from-[#061e25] to-[#0A0A0A] p-8 md:p-12 rounded-[2rem] border border-edNeon/50 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_80px_rgba(8,223,240,0.1)] hover:shadow-[0_0_100px_rgba(8,223,240,0.2)] transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-edNeon text-black font-sans uppercase tracking-widest text-[10px] font-extrabold px-6 py-2 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(8,223,240,0.5)]">
                A Elite Escolhe Este
              </div>
              
              <div className="font-sans uppercase tracking-[0.2em] text-xs text-edNeon mb-4">A Experiência Completa</div>
              <h3 className="text-4xl italic mb-2">Premium Vault</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-sans text-xl text-white/50">R$</span>
                <span className="text-7xl font-bold text-white">37,00</span>
              </div>
              
              <ul className="font-sans space-y-4 mb-12 flex-1 text-sm text-white/90">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-edNeon"/> <b>TUDO do Pack Start</b></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-edNeon"/> <b>+ 30 Templates Exclusivos (Total 50+)</b></li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-edNeon"/> Estruturas baseadas em Copywriting</li>
                
                {/* Bônus Oficiais */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-widest text-edNeon mb-3">Bônus Inclusos:</div>
                  <li className="flex items-center gap-3"><Zap size={18} className="text-edNeon shrink-0"/> <b>BÔNUS 1:</b> Design Site System Blueprint</li>
                  <li className="flex items-center gap-3"><Zap size={18} className="text-edNeon shrink-0"/> <b>BÔNUS 2:</b> 15 Golden Skill De Motions</li>
                  <li className="flex items-center gap-3"><Zap size={18} className="text-edNeon shrink-0"/> <b>BÔNUS 3:</b> Kit Cinematográfico Prompts Secretos</li>
                </div>
              </ul>

              <a href="https://pay.kiwify.com.br/euVfObl" target="_blank" className="w-full py-5 rounded-full bg-edNeon text-black text-center font-sans uppercase tracking-widest text-sm font-extrabold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(8,223,240,0.4)]">
                <Lock size={16}/> Destravar Premium Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GARANTIA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#0A0A0A] p-10 rounded-[2rem] border border-white/5">
          <ShieldCheck size={80} className="text-edNeon shrink-0" />
          <div>
            <h3 className="text-3xl italic mb-4">Garantia Incondicional de 7 Dias</h3>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Risco zero. Acesse o cofre, pegue os templates, teste na sua Bio. Se você não achar que seu perfil subiu de nível instantaneamente, ou se não gostar por qualquer motivo, nós devolvemos cada centavo do seu dinheiro. Sem formulários complexos, basta um email.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FAQ ULTRA COMPLETO */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle size={40} className="mx-auto mb-6 text-edNeon/50" />
            <h3 className="text-4xl italic">Perguntas Frequentes</h3>
            <p className="font-sans text-white/50 text-sm mt-4">Elimine todas as suas dúvidas antes de entrar no Cofre.</p>
          </div>
          
          <div className="space-y-4 font-sans">
            {[
              { 
                q: "Preciso pagar a versão Pro do Canva para usar os templates?", 
                a: "Absolutamente não! Todos os nossos templates foram meticulosamente construídos utilizando apenas elementos 100% gratuitos do Canva. Você não terá que desembolsar nem mais um centavo em assinaturas de design para ter uma bio de luxo." 
              },
              { 
                q: "Preciso ter experiência em design para conseguir editar?", 
                a: "Zero experiência necessária. Nós fizemos todo o trabalho duro de UX e Neuro-design para você. Tudo que você precisa fazer é arrastar a sua foto para cima da nossa, dar dois cliques para mudar o texto e colar os seus links. Leva literalmente 5 minutos, pelo celular ou PC." 
              },
              { 
                q: "Como vou receber o acesso aos templates após a compra?", 
                a: "A liberação é instantânea. Assim que o seu pagamento for aprovado pela Kiwify (PIX ou Cartão), você receberá um email automático contendo o acesso ao nosso portal. Lá dentro, estará o seu material com os links mágicos que importam os templates direto para o seu Canva." 
              },
              { 
                q: "Por quanto tempo terei acesso ao material?", 
                a: "O acesso é vitalício! Uma vez dentro do Cofre, esses templates são seus para sempre. Você pode voltar, baixar e editar quantas vezes quiser no futuro, sem cobranças mensais ou anuais." 
              },
              { 
                q: "Tenho uma Agência. Posso usar esses templates para os meus clientes?", 
                a: "Com certeza. Ao adquirir nossos packs, você ganha a licença comercial indireta para utilizá-los nos perfis dos seus clientes de Social Media. Venda um 'Upgrade de Bio' para o seu cliente por R$ 300, use nosso template em 5 minutos, e fique com 100% do lucro." 
              },
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white/5 hover:bg-white/10 transition-colors rounded-[2rem] border border-white/5">
                <h4 className="font-bold text-edNeon mb-3 text-lg">{faq.q}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/10 bg-black">
        <div className="font-sans text-xs uppercase tracking-widest text-white/30 mb-4">
          © 2026 EdCria Studio. Todos os direitos reservados.
        </div>
        <div className="font-sans text-[10px] text-white/20 max-w-2xl mx-auto px-6">
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira.
        </div>
      </footer>
      
    </div>
  );
}
