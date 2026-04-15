import clsx from "clsx";
import svgPaths from "./svg-e6j8jcqjlg";
import imgCanvas from "figma:asset/cf9af825d960469b016dee5d12d7c1ed3f2725c2.png";

function ParagraphBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#717182] text-[14px]">{children}</p>
    </div>
  );
}
type TextBackgroundImageProps = {
  additionalClassNames?: string;
};

function TextBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<TextBackgroundImageProps>) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return <BackgroundImage6 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage6>;
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return <BackgroundImage6 additionalClassNames={clsx("relative shrink-0 w-[263.475px]", additionalClassNames)}>{children}</BackgroundImage6>;
}
type CardBackgroundImageProps = {
  additionalClassNames?: string;
};

function CardBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<CardBackgroundImageProps>) {
  return (
    <div className={clsx("bg-white relative rounded-[14px] shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[1.6px] relative size-full">{children}</div>
    </div>
  );
}
type CardContentBackgroundImageProps = {
  additionalClassNames?: string;
};

function CardContentBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<CardContentBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-[650.125px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-[24px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("h-[44px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(90,115,36,0.1)] relative rounded-[10px] shrink-0 size-[36px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center justify-between relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type IconBackgroundImage3Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage3Props>) {
  return (
    <BackgroundImage1 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </BackgroundImage2>
  );
}

function IconBackgroundImage2() {
  return (
    <BackgroundImage additionalClassNames="top-[4px]">
      <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage>
  );
}
type IconBackgroundImage1Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage1({ additionalClassNames = "" }: IconBackgroundImage1Props) {
  return (
    <BackgroundImage2 additionalClassNames={additionalClassNames}>
      <g clipPath="url(#clip0_252_810)" id="Icon">
        <path d={svgPaths.p37143280} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p1d7f0000} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p2b722f80} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M8.33333 5H11.6667" id="Vector_4" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M8.33333 8.33333H11.6667" id="Vector_5" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M8.33333 11.6667H11.6667" id="Vector_6" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M8.33333 15H11.6667" id="Vector_7" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip0_252_810">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </BackgroundImage2>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full", additionalClassNames)}>
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage additionalClassNames="top-[4px]">
      <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage>
  );
}
type BadgeBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BadgeBackgroundImageAndText({ text, additionalClassNames = "" }: BadgeBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#b3bf56] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[21.587px] left-0 overflow-clip rounded-[8px] top-[30px]", additionalClassNames)}>
      <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[#401c08] text-[12px] top-[1.2px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Icon4VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon4VectorBackgroundImage({ additionalClassNames = "" }: Icon4VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute bottom-3/4 top-[8.33%]", additionalClassNames)}>
      <div className="absolute inset-[-25%_-0.83px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 5">
          <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[293.063px]">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#717182] text-[14px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#717182] text-[14px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#401c08] text-[16px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#401c08] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function SistemaWebDeGanado() {
  return (
    <div className="bg-white relative size-full" data-name="Sistema Web de Ganado">
      <div className="absolute bg-white h-[670.4px] left-0 top-0 w-[1448px]" data-name="App">
        <div className="absolute bg-[#401c08] content-stretch flex flex-col h-[116px] items-start left-0 pt-[24px] px-[100px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[1448px]" data-name="Header">
          <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
            <BackgroundImage3>
              <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                  <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
                    <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[36px] left-[582.95px] not-italic text-[24px] text-center text-white top-[-0.2px] whitespace-nowrap">Sistema de Regulación y Control de Ganado</p>
                  </div>
                  <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
                    <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)] text-center">Verifica, confía y compra</p>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[83.275px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <IconBackgroundImage3 additionalClassNames="absolute left-[10.8px] top-[8px]">
                    <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </IconBackgroundImage3>
                  <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[56.8px] not-italic text-[#401c08] text-[14px] text-center top-[6px] whitespace-nowrap">Inicio</p>
                </div>
              </div>
            </BackgroundImage3>
          </div>
        </div>
        <div className="absolute h-[1668.95px] left-[212px] top-[116px] w-[1024px]" data-name="AnimalDetail">
          <div className="absolute bg-white border-[#401c08] border-[0.8px] border-solid h-[36px] left-[16px] rounded-[8px] top-[32px] w-[146.525px]" data-name="Button">
            <IconBackgroundImage3 additionalClassNames="absolute left-[12px] top-[9.2px]">
              <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </IconBackgroundImage3>
            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[88.5px] not-italic text-[#401c08] text-[14px] text-center top-[7.2px] whitespace-nowrap">Volver a la lista</p>
          </div>
          <div className="absolute h-[1441.75px] left-[16px] top-[92px] w-[992px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[24px] h-[1441.75px] items-start left-0 top-0 w-[653.325px]" data-name="Container">
              <CardBackgroundImage additionalClassNames="h-[540.188px]">
                <div className="h-[89.988px] relative shrink-0 w-[650.125px]" data-name="CardHeader">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__59.99px_minmax(0,1fr)] pb-[6px] pt-[24px] px-[24px] relative size-full">
                    <div className="col-1 content-stretch flex h-[59.987px] items-start justify-between justify-self-stretch relative row-1 shrink-0" data-name="AnimalDetail">
                      <div className="h-[59.987px] relative shrink-0 w-[135.375px]" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                          <div className="h-[31.988px] relative shrink-0 w-full" data-name="CardTitle">
                            <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[32px] left-0 not-italic text-[#401c08] text-[24px] top-[0.2px] whitespace-nowrap">Yorkshire 002</p>
                          </div>
                          <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
                            <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#717182] text-[16px]">Yorkshire · Hembra</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#b3bf56] h-[41.6px] relative rounded-[8px] shrink-0 w-[73.563px]" data-name="Badge">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[16.8px] py-[8.8px] relative rounded-[inherit] size-full">
                          <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#401c08] text-[16px] whitespace-nowrap">Bueno</p>
                        </div>
                        <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardContentBackgroundImage additionalClassNames="h-[423px]">
                  <div className="h-[104px] relative shrink-0 w-full" data-name="AnimalDetail">
                    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 top-0 w-[293.063px]" data-name="Container">
                      <ContainerBackgroundImage>
                        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                          <div className="absolute inset-[8.33%]" data-name="Vector">
                            <div className="absolute inset-[-5%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                                <path d={svgPaths.p2220ad80} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </ContainerBackgroundImage>
                      <ContainerBackgroundImage1 additionalClassNames="w-[117.213px]">
                        <ParagraphBackgroundImageAndText text="No. de identificación" />
                        <ParagraphBackgroundImageAndText1 text="POR-002" />
                      </ContainerBackgroundImage1>
                    </div>
                    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-[309.06px] top-0 w-[293.063px]" data-name="Container">
                      <ContainerBackgroundImage>
                        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                          <div className="absolute inset-[8.33%_37.5%_66.67%_37.5%]" data-name="Vector">
                            <div className="absolute inset-[-16.67%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
                                <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[33.33%_8.34%_12.5%_8.49%]" data-name="Vector">
                            <div className="absolute inset-[-7.69%_-5.01%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3024 12.5">
                                <path d={svgPaths.p9a62d00} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </ContainerBackgroundImage>
                      <ContainerBackgroundImage1 additionalClassNames="w-[44.275px]">
                        <BackgroundImageAndText1 text="Peso" />
                        <BackgroundImageAndText text="120 kg" />
                      </ContainerBackgroundImage1>
                    </div>
                    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-center left-0 top-[60px] w-[293.063px]" data-name="Container">
                      <ContainerBackgroundImage>
                        <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                          <Icon4VectorBackgroundImage additionalClassNames="left-[33.33%] right-[66.67%]" />
                          <Icon4VectorBackgroundImage additionalClassNames="left-[66.67%] right-[33.33%]" />
                          <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                            <div className="absolute inset-[-5.56%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                                <path d={svgPaths.pf3beb80} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
                            <div className="absolute inset-[-0.83px_-5.56%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
                                <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </ContainerBackgroundImage>
                      <ContainerBackgroundImage1 additionalClassNames="w-[42.025px]">
                        <BackgroundImageAndText1 text="Edad" />
                        <BackgroundImageAndText text="1 años" />
                      </ContainerBackgroundImage1>
                    </div>
                  </div>
                  <div className="bg-[rgba(90,115,36,0.2)] h-px shrink-0 w-full" data-name="Primitive.div" />
                  <div className="h-[52px] relative shrink-0 w-full" data-name="AnimalDetail">
                    <div className="absolute h-[52px] left-0 top-0 w-[293.063px]" data-name="Container">
                      <BackgroundImageAndText2 text="Propósito de Venta" />
                      <BadgeBackgroundImageAndText text="Desarrollo" additionalClassNames="w-[66.838px]" />
                    </div>
                    <div className="absolute h-[52px] left-[309.06px] top-0 w-[293.063px]" data-name="Container">
                      <BackgroundImageAndText2 text="Condición" />
                      <BadgeBackgroundImageAndText text="Buena" additionalClassNames="w-[47.2px]" />
                    </div>
                  </div>
                  <div className="bg-[rgba(90,115,36,0.2)] h-px shrink-0 w-full" data-name="Primitive.div" />
                  <div className="h-[44px] relative shrink-0 w-full" data-name="AnimalDetail">
                    <div className="absolute h-[44px] left-0 top-0 w-[293.063px]" data-name="Container">
                      <BackgroundImage2 additionalClassNames="top-[4px]">
                        <g clipPath="url(#clip0_252_862)" id="Icon">
                          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p240d7000} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p25499600} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                        <defs>
                          <clipPath id="clip0_252_862">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </BackgroundImage2>
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[109.662px]" data-name="Container">
                        <ParagraphBackgroundImageAndText text="Tipo de Producción" />
                        <ParagraphBackgroundImageAndText1 text="Engorda" />
                      </div>
                    </div>
                    <div className="absolute h-[44px] left-[309.06px] top-0 w-[293.063px]" data-name="Container">
                      <BackgroundImage additionalClassNames="top-[4px]">
                        <path d={svgPaths.p2f84f400} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage>
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[54.1px]" data-name="Container">
                        <ParagraphBackgroundImageAndText text="Con Crías" />
                        <ParagraphBackgroundImageAndText1 text="No" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[rgba(90,115,36,0.2)] h-px shrink-0 w-full" data-name="Primitive.div" />
                  <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[100px] relative shrink-0 w-full" data-name="AnimalDetail">
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                      <BackgroundImage additionalClassNames="top-[4px]">
                        <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage>
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[181.463px]" data-name="Container">
                        <BackgroundImageAndText1 text="Origen" />
                        <BackgroundImageAndText text="Granja San José, Michoacán" />
                      </div>
                    </div>
                    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Container">
                      <IconBackgroundImage />
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[157.625px]" data-name="Container">
                        <BackgroundImageAndText1 text="Fecha de Registro" />
                        <BackgroundImageAndText text="9 de noviembre de 2025" />
                      </div>
                    </div>
                  </div>
                </CardContentBackgroundImage>
              </CardBackgroundImage>
              <div className="bg-white h-[126.787px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
                <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="absolute gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__20px_minmax(0,1fr)] h-[50px] left-[1.6px] pb-[6px] pt-[24px] px-[24px] top-[1.6px] w-[650.125px]" data-name="CardHeader">
                  <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardTitle">
                    <BackgroundImage additionalClassNames="top-0">
                      <path d={svgPaths.p164f7540} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p809b580} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </BackgroundImage>
                    <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#401c08] text-[16px] top-px whitespace-nowrap">Certificaciones</p>
                  </div>
                </div>
                <div className="absolute h-[25.587px] left-[25.6px] top-[75.6px] w-[602.125px]" data-name="AnimalDetail">
                  <div className="absolute bg-[#5a7324] h-[25.587px] left-0 rounded-[8px] top-0 w-[170.262px]" data-name="Badge">
                    <BackgroundImageAndText3 text="Libre de Peste Porcina Clásica" additionalClassNames="px-[12.8px] py-[4.8px]" />
                    <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
              <div className="bg-white h-[265.2px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
                <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="absolute gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__20px_minmax(0,1fr)] h-[50px] left-[1.6px] pb-[6px] pt-[24px] px-[24px] top-[1.6px] w-[650.125px]" data-name="CardHeader">
                  <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardTitle">
                    <IconBackgroundImage1 additionalClassNames="top-0" />
                    <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#401c08] text-[16px] top-px whitespace-nowrap">Información del Productor</p>
                  </div>
                </div>
                <div className="absolute h-[164px] left-[25.6px] top-[75.6px] w-[602.125px]" data-name="AnimalDetail">
                  <div className="absolute h-[44px] left-0 top-0 w-[293.063px]" data-name="Container">
                    <IconBackgroundImage1 additionalClassNames="top-[4px]" />
                    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[111.662px]" data-name="Container">
                      <ParagraphBackgroundImageAndText text="Nombre del Rancho" />
                      <ParagraphBackgroundImageAndText1 text="Granja San José" />
                    </div>
                  </div>
                  <div className="absolute h-[44px] left-[309.06px] top-0 w-[293.063px]" data-name="Container">
                    <IconBackgroundImage2 />
                    <div className="absolute h-[44px] left-[32px] top-0 w-[88.463px]" data-name="Container">
                      <div className="absolute content-stretch flex h-[20px] items-start left-0 top-0 w-[88.463px]" data-name="Paragraph">
                        <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">Tipo de Rancho</p>
                      </div>
                      <div className="absolute bg-[#5a7324] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[21.587px] left-0 overflow-clip rounded-[8px] top-[22px] w-[62.463px]" data-name="Badge">
                        <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-white top-[1.2px] whitespace-nowrap">Traspatio</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[44px] left-0 top-[60px] w-[293.063px]" data-name="Container">
                    <IconBackgroundImage2 />
                    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[182.7px]" data-name="Container">
                      <BackgroundImageAndText1 text="Propietario" />
                      <BackgroundImageAndText text="Ana María López Hernández" />
                    </div>
                  </div>
                  <div className="absolute h-[44px] left-[309.06px] top-[60px] w-[293.063px]" data-name="Container">
                    <BackgroundImage2 additionalClassNames="top-[4px]">
                      <g clipPath="url(#clip0_252_799)" id="Icon">
                        <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_252_799">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage2>
                    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[123.375px]" data-name="Container">
                      <BackgroundImageAndText1 text="Contacto" />
                      <BackgroundImageAndText text="+52 44 4567 8901" />
                    </div>
                  </div>
                  <div className="absolute h-[44px] left-0 top-[120px] w-[293.063px]" data-name="Container">
                    <BackgroundImage2 additionalClassNames="top-[4px]">
                      <g clipPath="url(#clip0_252_794)" id="Icon">
                        <path d={svgPaths.pe72a800} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p232c4380} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3cabe780} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_252_794">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </BackgroundImage2>
                    <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[124.713px]" data-name="Container">
                      <BackgroundImageAndText1 text="Ubicación" />
                      <BackgroundImageAndText text="Michoacán, México" />
                    </div>
                  </div>
                </div>
              </div>
              <CardBackgroundImage additionalClassNames="h-[242.788px]">
                <div className="h-[50px] relative shrink-0 w-[650.125px]" data-name="CardHeader">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__20px_minmax(0,1fr)] pb-[6px] pt-[24px] px-[24px] relative size-full">
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardTitle">
                      <BackgroundImage2 additionalClassNames="top-0">
                        <g clipPath="url(#clip0_252_850)" id="Icon">
                          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                        <defs>
                          <clipPath id="clip0_252_850">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </BackgroundImage2>
                      <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#401c08] text-[16px] top-px whitespace-nowrap">Certificación Veterinaria</p>
                    </div>
                  </div>
                </div>
                <CardContentBackgroundImage additionalClassNames="h-[165.588px]">
                  <div className="h-[21.587px] relative shrink-0 w-full" data-name="AnimalDetail">
                    <div className="absolute bg-[#5a7324] h-[21.587px] left-0 rounded-[8px] top-0 w-[70.138px]" data-name="Badge">
                      <BackgroundImageAndText3 text="Certificado" additionalClassNames="px-[8.8px] py-[2.8px]" />
                      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="absolute bg-[#5a7324] border-[0.8px] border-[rgba(0,0,0,0)] border-solid h-[21.587px] left-[78.14px] overflow-clip rounded-[8px] top-0 w-[146.913px]" data-name="Badge">
                      <div className="absolute left-[8px] size-[12px] top-[3.99px]" data-name="Icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g id="Icon">
                            <path d={svgPaths.p2bec7a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.5 6L5.5 7L7.5 5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </div>
                      <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[24px] not-italic text-[12px] text-white top-[1.2px] whitespace-nowrap">Certificación Verificada</p>
                    </div>
                  </div>
                  <div className="h-[104px] relative shrink-0 w-full" data-name="AnimalDetail">
                    <div className="absolute h-[44px] left-0 top-0 w-[293.063px]" data-name="Container">
                      <IconBackgroundImage2 />
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[118.338px]" data-name="Container">
                        <BackgroundImageAndText1 text="Certificado por" />
                        <BackgroundImageAndText text="Dra. Ana Martínez" />
                      </div>
                    </div>
                    <div className="absolute h-[44px] left-[309.06px] top-0 w-[293.063px]" data-name="Container">
                      <BackgroundImage additionalClassNames="top-[4px]">
                        <path d={svgPaths.p16dd5f0} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M1.66667 8.33333H18.3333" id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage>
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[120.037px]" data-name="Container">
                        <BackgroundImageAndText1 text="Cédula Profesional" />
                        <BackgroundImageAndText text="CED-VET-5673421" />
                      </div>
                    </div>
                    <div className="absolute h-[44px] left-0 top-[60px] w-[293.063px]" data-name="Container">
                      <IconBackgroundImage />
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[125.025px]" data-name="Container">
                        <ParagraphBackgroundImageAndText text="Fecha de Certificación" />
                        <ParagraphBackgroundImageAndText1 text="14/2/2026" />
                      </div>
                    </div>
                    <div className="absolute h-[44px] left-[309.06px] top-[60px] w-[293.063px]" data-name="Container">
                      <BackgroundImage additionalClassNames="top-[4px]">
                        <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #BC4C27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #BC4C27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #BC4C27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #BC4C27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </BackgroundImage>
                      <div className="absolute content-stretch flex flex-col h-[44px] items-start left-[32px] top-0 w-[98.238px]" data-name="Container">
                        <ParagraphBackgroundImageAndText text="Próxima Revisión" />
                        <ParagraphBackgroundImageAndText1 text="14/5/2026" />
                      </div>
                    </div>
                  </div>
                </CardContentBackgroundImage>
              </CardBackgroundImage>
              <CardBackgroundImage additionalClassNames="h-[170.788px]">
                <div className="h-[66px] relative shrink-0 w-[650.125px]" data-name="CardHeader">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[6px] gap-y-[6px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__36px_minmax(0,1fr)] pb-[6px] pt-[24px] px-[24px] relative size-full">
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="AnimalDetail">
                      <BackgroundImage3>
                        <BackgroundImage5 additionalClassNames="h-[20px] w-[182.1px]">
                          <BackgroundImage2 additionalClassNames="top-0">
                            <g clipPath="url(#clip0_252_802)" id="Icon">
                              <path d="M15 1.66667L18.3333 5" id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={svgPaths.p182d9180} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={svgPaths.p2c082940} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M7.5 9.16667L10.8333 12.5" id="Vector_4" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={svgPaths.p33ba6980} id="Vector_5" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={svgPaths.p3fa36900} id="Vector_6" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </g>
                            <defs>
                              <clipPath id="clip0_252_802">
                                <rect fill="white" height="20" width="20" />
                              </clipPath>
                            </defs>
                          </BackgroundImage2>
                          <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[28px] not-italic text-[#401c08] text-[16px] top-px whitespace-nowrap">Historial de Vacunación</p>
                        </BackgroundImage5>
                        <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[179.113px]" data-name="Button">
                          <div aria-hidden="true" className="absolute border-[#5a7324] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <BackgroundImage1 additionalClassNames="absolute left-[12.8px] top-[10px]">
                              <g clipPath="url(#clip0_252_879)" id="Icon">
                                <path d="M12 1.33333L14.6667 4" id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d={svgPaths.p550c080} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d={svgPaths.p3ab54c00} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d="M6 7.33333L8.66667 10" id="Vector_4" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d={svgPaths.p36c63a00} id="Vector_5" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d={svgPaths.p1d48d580} id="Vector_6" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </g>
                              <defs>
                                <clipPath id="clip0_252_879">
                                  <rect fill="white" height="16" width="16" />
                                </clipPath>
                              </defs>
                            </BackgroundImage1>
                            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[101.8px] not-italic text-[#5a7324] text-[14px] text-center top-[8px] whitespace-nowrap">Ver Historial Completo</p>
                          </div>
                        </div>
                      </BackgroundImage3>
                    </div>
                  </div>
                </div>
                <div className="h-[77.588px] relative shrink-0 w-[650.125px]" data-name="CardContent">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start px-[24px] relative size-full">
                    <BackgroundImageAndText1 text="1 vacunación registrada" />
                    <div className="h-[21.587px] relative shrink-0 w-full" data-name="AnimalDetail">
                      <div className="absolute h-[21.587px] left-0 rounded-[8px] top-0 w-[82.225px]" data-name="Badge">
                        <div className="content-stretch flex items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] size-full">
                          <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5a7324] text-[12px] whitespace-nowrap">Peste Porcina</p>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#5a7324] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardBackgroundImage>
            </div>
            <div className="absolute h-[1441.75px] left-[677.33px] top-0 w-[314.675px]" data-name="Container" />
          </div>
          <div className="absolute bg-[#f2eac2] content-stretch flex flex-col h-[63.2px] items-start left-[16px] pb-[1.6px] pl-[25.6px] pr-[1.6px] pt-[17.6px] rounded-[14px] top-[1557.75px] w-[992px]" data-name="Card">
            <div aria-hidden="true" className="absolute border-[#5a7324] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[14px]" />
            <div className="h-[20px] relative shrink-0 w-[940.8px]" data-name="AnimalDetail">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center pl-[328.313px] pr-[328.325px] relative size-full">
                <IconBackgroundImage3 additionalClassNames="relative shrink-0">
                  <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </IconBackgroundImage3>
                <TextBackgroundImage additionalClassNames="w-[119.225px]">
                  <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#401c08] text-[14px] whitespace-nowrap">Última actualización:</p>
                </TextBackgroundImage>
                <TextBackgroundImage additionalClassNames="w-[132.938px]">
                  <p className="font-['Annapurna_SIL:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#401c08] text-[14px] whitespace-nowrap">14 de febrero de 2026</p>
                </TextBackgroundImage>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#401c08] content-stretch flex flex-col gap-[8px] h-[91.988px] items-start left-0 pt-[24px] px-[100px] top-[1832.95px] w-[1448px]" data-name="Footer">
          <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
            <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">© 2026 Sistema de Regulación y Control de Ganado · Gobierno Federal</p>
          </div>
          <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[624.28px] not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-center top-[-0.8px] whitespace-nowrap">Certificación veterinaria oficial · Trazabilidad garantizada</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[769.588px] items-start left-[905.33px] p-[1.6px] rounded-[14px] top-[270.4px] w-[314.675px]" data-name="Card">
        <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
        <BackgroundImage5 additionalClassNames="h-[46px] w-[311.475px]">
          <div className="absolute h-[16px] left-[24px] top-[24px] w-[263.475px]" data-name="CardTitle">
            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[132.03px] not-italic text-[#401c08] text-[16px] text-center top-[-1px] whitespace-nowrap">Código QR</p>
          </div>
        </BackgroundImage5>
        <div className="h-[696.388px] relative shrink-0 w-[311.475px]" data-name="CardContent">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
            <div className="bg-white relative rounded-[10px] shrink-0 size-[235.2px]" data-name="AnimalDetail">
              <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.6px] pt-[17.6px] px-[17.6px] relative size-full">
                <div className="h-[200px] relative shrink-0 w-full" data-name="Canvas">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCanvas} />
                </div>
              </div>
            </div>
            <BackgroundImage4 additionalClassNames="h-[40px]">
              <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[131.78px] not-italic text-[#717182] text-[14px] text-center top-0 w-[254px]">Escanea para acceso rápido a la ficha técnica certificada</p>
            </BackgroundImage4>
            <div className="h-[120px] relative shrink-0 w-[263.475px]" data-name="AnimalDetail">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#401c08] text-[14px] text-center">Información del QR:</p>
                </div>
                <div className="bg-[rgba(242,234,194,0.3)] h-[92px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[4px] items-start pt-[12px] px-[12px] relative size-full">
                    <ParagraphBackgroundImage>
                      <span className="leading-[20px]">ID:</span>
                      <span className="leading-[20px] text-[#401c08]">{` POR-002`}</span>
                    </ParagraphBackgroundImage>
                    <ParagraphBackgroundImage>
                      <span className="leading-[20px]">Animal:</span>
                      <span className="leading-[20px] text-[#401c08]">{` Yorkshire 002`}</span>
                    </ParagraphBackgroundImage>
                    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular','Noto_Sans:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#717182] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
                        <span className="leading-[20px]">Estado:</span>
                        <span className="leading-[20px] text-[#401c08]">{` Certificado ✓`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(90,115,36,0.2)] h-px shrink-0 w-[263.475px]" data-name="Primitive.div" />
            <div className="h-[143.188px] relative rounded-[14px] shrink-0 w-[263.475px]" data-name="Card" style={{ backgroundImage: "linear-gradient(151.478deg, rgb(64, 28, 8) 0%, rgb(67, 34, 10) 7.1429%, rgb(69, 40, 12) 14.286%, rgb(72, 46, 14) 21.429%, rgb(74, 53, 15) 28.571%, rgb(77, 59, 17) 35.714%, rgb(79, 65, 19) 42.857%, rgb(81, 71, 21) 50%, rgb(82, 77, 23) 57.143%, rgb(84, 83, 25) 64.286%, rgb(86, 90, 28) 71.429%, rgb(87, 96, 30) 78.571%, rgb(88, 102, 32) 85.714%, rgb(89, 109, 34) 92.857%, rgb(90, 115, 36) 100%)" }}>
              <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.6px] relative size-full">
                <div className="bg-[#401c08] h-[139.988px] relative shrink-0 w-[260.275px]" data-name="AnimalDetail">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
                    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.8)] text-center tracking-[0.35px] uppercase">Precio de Venta</p>
                    </div>
                    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[44.938px] pr-[44.95px] relative size-full">
                          <div className="relative shrink-0 size-[32px]" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g id="Icon">
                                <path d="M16 2.66667V29.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                                <path d={svgPaths.p30e9cc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                              </g>
                            </svg>
                          </div>
                          <BackgroundImage5 additionalClassNames="h-[40px] w-[86.388px]">
                            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[40px] left-[43.5px] not-italic text-[36px] text-center text-white top-[-0.4px] whitespace-nowrap">8,500</p>
                          </BackgroundImage5>
                        </div>
                      </div>
                    </div>
                    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[106.59px] not-italic text-[12px] text-[rgba(255,255,255,0.6)] text-center top-[-0.8px] whitespace-nowrap">MXN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(90,115,36,0.2)] h-px shrink-0 w-[263.475px]" data-name="Primitive.div" />
            <BackgroundImage4 additionalClassNames="bg-[#5a7324] h-[36px] rounded-[8px]">
              <BackgroundImage1 additionalClassNames="absolute left-[50.85px] top-[10px]">
                <g clipPath="url(#clip0_252_780)" id="Icon">
                  <path d={svgPaths.p13c49c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p145ef000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p38f09280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p17c93d80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_252_780">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </BackgroundImage1>
              <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[143.85px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">Ver Galería de Imágenes</p>
            </BackgroundImage4>
          </div>
        </div>
      </div>
    </div>
  );
}