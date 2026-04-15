import clsx from "clsx";
import svgPaths from "./svg-iwysqeilp3";
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className={clsx("justify-self-stretch relative rounded-[14px] row-1 self-stretch shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[20px] px-[20px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[20px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type Icon1Props = {
  additionalClassNames?: string;
};

function Icon1({ children, additionalClassNames = "" }: React.PropsWithChildren<Icon1Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type LinkProps = {
  additionalClassNames?: string;
};

function Link({ children, additionalClassNames = "" }: React.PropsWithChildren<LinkProps>) {
  return (
    <div className={clsx("h-[48px] relative rounded-[10px] shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ children, additionalClassNames = "" }: React.PropsWithChildren<IconProps>) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <g id="Icon">{children}</g>
    </Wrapper>
  );
}
type ButtonText1Props = {
  text: string;
};

function ButtonText1({ text }: ButtonText1Props) {
  return (
    <div className="h-[37.6px] relative rounded-[10px] shrink-0 w-[32.7px]">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[16.8px] not-italic text-[#364153] text-[14px] text-center top-[8.8px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("h-[37.6px] relative rounded-[10px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12.8px] py-[8.8px] relative size-full">
        <p className="font-['Annapurna_SIL:Regular','Noto_Sans_Symbols:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type TextText3Props = {
  text: string;
};

function TextText3({ text }: TextText3Props) {
  return (
    <div className="absolute bg-[#fef9c2] content-stretch flex h-[24.8px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[16.4px] w-[74.037px]">
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#894b00] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="absolute bg-[#dbeafe] content-stretch flex h-[24.8px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[16.4px] w-[72.825px]">
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#193cb8] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex h-[24.8px] items-start left-[24px] px-[12px] py-[4px] rounded-[26843500px] top-[16.4px] w-[50.025px]">
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText({ text, additionalClassNames = "" }: TableCellTextProps) {
  return (
    <div className={clsx("absolute top-0", additionalClassNames)}>
      <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[24px] not-italic text-[#364153] text-[14px] top-[18.4px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({ text, additionalClassNames = "" }: HeaderCellTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[52.4px] items-start px-[24px] py-[16px] top-0", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[36px] relative shrink-0 w-full">
      <p className="absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper2 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type CollapsibleSidebarTextProps = {
  text: string;
  additionalClassNames?: string;
};

function CollapsibleSidebarText({ text, additionalClassNames = "" }: CollapsibleSidebarTextProps) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function SistemaDeRegulacionDeGanado() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Sistema de Regulación de Ganado">
      <div className="bg-[#f9fafb] content-stretch flex h-[1128px] items-start relative shrink-0 w-full" data-name="VeterinarianActivityLog">
        <div className="bg-white h-[1128px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[288px]" data-name="CollapsibleSidebar">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute h-[1047.2px] left-0 top-0 w-[288px]" data-name="Container">
              <div className="absolute content-stretch flex h-[60px] items-start justify-end left-0 pr-[12px] pt-[16px] top-0 w-[288px]" data-name="Container">
                <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[12.5%]" data-name="Vector">
                        <div className="absolute inset-[-5.56%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                            <path d={svgPaths.pf3beb80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[12.5%_62.5%_12.5%_37.5%]" data-name="Vector">
                        <div className="absolute inset-[-5.56%_-0.83px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 16.6667">
                            <path d="M0.833333 0.833333V15.8333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[37.5%_33.33%_37.5%_54.17%]" data-name="Vector">
                        <div className="absolute inset-[-16.67%_-33.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 6.66667">
                            <path d={svgPaths.p1b3f8780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[60px] w-[256px]" data-name="Container">
                <div className="bg-[#d1eec9] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
                    <div className="relative shrink-0 size-[24px]" data-name="Icon">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Icon">
                          <path d={svgPaths.p67f12c8} id="Vector" stroke="var(--stroke-0, #357324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #357324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="h-[39.987px] relative shrink-0 w-[134.6px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="content-stretch flex h-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Heading 2">
                      <p className="font-['Annapurna_SIL:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Dr. Alberto Méndez</p>
                    </div>
                    <div className="h-[15.988px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[-0.8px] whitespace-nowrap">Veterinario Certificador</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[4px] h-[915.2px] items-start left-0 px-[12px] top-[132px] w-[288px]" data-name="Navigation">
                <Link>
                  <Icon additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <CollapsibleSidebarText text="Panel Principal" additionalClassNames="w-[97.1px]" />
                </Link>
                <Link>
                  <Icon additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p12751280} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <CollapsibleSidebarText text="Todas las Solicitudes" additionalClassNames="w-[133.425px]" />
                </Link>
                <Link additionalClassNames="bg-[#d1eec9]">
                  <Wrapper additionalClassNames="relative shrink-0">
                    <g clipPath="url(#clip0_273_1445)" id="Icon">
                      <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #357324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                    <defs>
                      <clipPath id="clip0_273_1445">
                        <rect fill="white" height="20" width="20" />
                      </clipPath>
                    </defs>
                  </Wrapper>
                  <div className="h-[24px] relative shrink-0 w-[101.438px]" data-name="CollapsibleSidebar">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
                      <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#357324] text-[16px] whitespace-nowrap">Mis Actividades</p>
                    </div>
                  </div>
                </Link>
                <Link>
                  <Icon additionalClassNames="relative shrink-0">
                    <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </Icon>
                  <CollapsibleSidebarText text="Mi Perfil" additionalClassNames="w-[56.05px]" />
                </Link>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[80.8px] items-start left-0 pt-[16.8px] px-[12px] top-[1047.2px] w-[288px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
              <Link>
                <Icon additionalClassNames="relative shrink-0">
                  <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Icon>
                <Wrapper1 additionalClassNames="h-[24px] w-[85.688px]">
                  <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#e7000b] text-[16px] whitespace-nowrap">Cerrar Sesión</p>
                </Wrapper1>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[1128px] min-h-px min-w-px relative" data-name="Main Content">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[76px] items-start left-[40px] top-[40px] w-[1100px]" data-name="Container">
              <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 1">
                <p className="absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[-0.4px] whitespace-nowrap">Mis Actividades</p>
              </div>
              <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#4a5565] text-[18px] top-[-0.2px] whitespace-nowrap">Revisa tu historial de acciones en el sistema</p>
              </div>
            </div>
            <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[104px] left-[40px] top-[148px] w-[1100px]" data-name="Container">
              <Button additionalClassNames="bg-[#357324] col-1">
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="bg-white rounded-[26843500px] shrink-0 size-[10px]" data-name="Container" />
                  <Wrapper1 additionalClassNames="h-[20px] w-[32.95px]">
                    <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">Todas</p>
                  </Wrapper1>
                </div>
                <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-white top-[-1px] whitespace-nowrap">25</p>
                </div>
              </Button>
              <Button additionalClassNames="bg-white col-2">
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#00c950] rounded-[26843500px] shrink-0 size-[10px]" data-name="Container" />
                  <TextText text="Creaciones" additionalClassNames="w-[60.325px]" />
                </div>
                <ParagraphText text="12" />
              </Button>
              <Button additionalClassNames="bg-white col-3">
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#2b7fff] rounded-[26843500px] shrink-0 size-[10px]" data-name="Container" />
                  <TextText text="Actualizaciones" additionalClassNames="w-[86.925px]" />
                </div>
                <ParagraphText text="8" />
              </Button>
              <Button additionalClassNames="bg-white col-4">
                <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="bg-[#f0b100] rounded-[26843500px] shrink-0 size-[10px]" data-name="Container" />
                  <TextText text="Desactivaciones" additionalClassNames="w-[88.338px]" />
                </div>
                <ParagraphText text="5" />
              </Button>
            </div>
            <div className="absolute bg-white h-[89.6px] left-[40px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[284px] w-[1100px]" data-name="Container">
              <div className="absolute content-stretch flex gap-[8px] h-[49.6px] items-center left-[664.04px] top-[20px] w-[187.2px]" data-name="Container">
                <Icon1 additionalClassNames="relative shrink-0">
                  <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </Icon1>
                <div className="bg-white flex-[1_0_0] h-[49.6px] min-h-px min-w-px relative rounded-[10px]" data-name="Date Picker">
                  <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
              </div>
              <div className="absolute content-stretch flex h-[24px] items-start left-[867.24px] top-[32.8px] w-[33.563px]" data-name="Text">
                <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] whitespace-nowrap">hasta</p>
              </div>
              <div className="absolute bg-white border-[#d1d5dc] border-[0.8px] border-solid h-[49.6px] left-[916.8px] rounded-[10px] top-[20px] w-[163.2px]" data-name="Date Picker" />
              <div className="absolute h-[49.6px] left-[20px] top-[20px] w-[628.038px]" data-name="Container">
                <div className="absolute h-[49.6px] left-0 rounded-[10px] top-0 w-[628.038px]" data-name="Text Input">
                  <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[12px] relative rounded-[inherit] size-full">
                    <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Buscar por ID de animal o detalles...</p>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
                <Icon additionalClassNames="absolute left-[12px] top-[14.8px]">
                  <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </Icon>
              </div>
            </div>
            <div className="absolute bg-white h-[690.4px] left-[40px] overflow-clip rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[397.6px] w-[1100px]" data-name="Container">
              <div className="absolute h-[620px] left-0 overflow-clip top-0 w-[1100px]" data-name="Table">
                <div className="absolute h-[52.4px] left-0 top-0 w-[1100px]" data-name="Table Header">
                  <div className="absolute bg-[#f9fafb] border-[#e5e7eb] border-b-[0.8px] border-solid h-[52.4px] left-0 top-0 w-[1100px]" data-name="Table Row">
                    <div className="absolute h-[52.4px] left-0 top-0 w-[221.713px]" data-name="Header Cell">
                      <div className="absolute h-[20px] left-[24px] top-[16px] w-[173.713px]" data-name="Container">
                        <p className="absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 whitespace-nowrap">Fecha/Hora</p>
                        <Icon1 additionalClassNames="absolute left-[74.66px] top-[2px]">
                          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #357324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </Icon1>
                      </div>
                    </div>
                    <div className="absolute h-[52.4px] left-[221.71px] top-0 w-[145.65px]" data-name="Header Cell">
                      <div className="absolute h-[20px] left-[24px] top-[16px] w-[97.65px]" data-name="Container">
                        <p className="absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 whitespace-nowrap">Acción</p>
                        <Icon1 additionalClassNames="absolute left-[44.72px] top-[2px]">
                          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </Icon1>
                      </div>
                    </div>
                    <HeaderCellText text="Entidad" additionalClassNames="left-[367.36px] w-[142.075px]" />
                    <HeaderCellText text="Detalles" additionalClassNames="left-[509.44px] w-[590.563px]" />
                  </div>
                </div>
                <div className="absolute h-[567.6px] left-0 top-[52.4px] w-[1100px]" data-name="Table Body">
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-0 w-[1100px]" data-name="Table Row">
                    <TableCellText text="13 mar 2026 04:30 p.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText1 text="Crear" />
                    </div>
                    <TableCellText text="Certificación" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Creó certificación de salud para animal Res-045" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[56.8px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="13 mar 2026 02:15 p.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText2 text="Actualizar" />
                    </div>
                    <TableCellText text="Perfil" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Actualizó especialidad profesional a Medicina Veterinaria de Grandes Animales" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[113.6px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="13 mar 2026 11:45 a.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText1 text="Crear" />
                    </div>
                    <TableCellText text="Evaluación" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Realizó evaluación clínica de animal Angus-123" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[170.4px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="12 mar 2026 03:20 p.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText3 text="Desactivar" />
                    </div>
                    <TableCellText text="Documento" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Desactivó certificado vencido para animal Hol-067" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[227.2px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="12 mar 2026 10:00 a.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText1 text="Crear" />
                    </div>
                    <TableCellText text="Certificación" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Emitió certificado de trazabilidad para lote de 8 bovinos" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[284px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="11 mar 2026 04:45 p.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText2 text="Actualizar" />
                    </div>
                    <TableCellText text="Evaluación" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Actualizó resultados de evaluación para animal Brah-089" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[340.8px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="11 mar 2026 01:30 p.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText1 text="Crear" />
                    </div>
                    <TableCellText text="Documento" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Generó reporte de certificaciones emitidas en marzo" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[397.6px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="10 mar 2026 03:15 p.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText3 text="Desactivar" />
                    </div>
                    <TableCellText text="Certificación" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Anuló certificación duplicada para animal Sim-045" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute border-[#f3f4f6] border-b-[0.8px] border-solid h-[56.8px] left-0 top-[454.4px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="10 mar 2026 11:00 a.m." additionalClassNames="h-[56.8px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.8px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText2 text="Actualizar" />
                    </div>
                    <TableCellText text="Perfil" additionalClassNames="h-[56.8px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Actualizó teléfono de contacto profesional" additionalClassNames="h-[56.8px] left-[509.44px] w-[590.563px]" />
                  </div>
                  <div className="absolute h-[56.4px] left-0 top-[511.2px] w-[1100px]" data-name="Table Row">
                    <TableCellText text="9 mar 2026 02:45 p.m." additionalClassNames="h-[56.4px] left-0 w-[221.713px]" />
                    <div className="absolute h-[56.4px] left-[221.71px] top-0 w-[145.65px]" data-name="Table Cell">
                      <TextText1 text="Crear" />
                    </div>
                    <TableCellText text="Evaluación" additionalClassNames="h-[56.4px] left-[367.36px] w-[142.075px]" />
                    <TableCellText text="Evaluó estado de salud de animal Char-123" additionalClassNames="h-[56.4px] left-[509.44px] w-[590.563px]" />
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#f9fafb] content-stretch flex h-[70.4px] items-center justify-between left-0 pt-[0.8px] px-[24px] top-[620px] w-[1100px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
                <Wrapper1 additionalClassNames="h-[20px] w-[203.7px]">
                  <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a5565] text-[0px] text-[14px] whitespace-nowrap">
                    <span className="leading-[20px]">{`Mostrando `}</span>
                    <span className="font-['Annapurna_SIL:Bold',sans-serif] leading-[20px]">1</span>
                    <span className="leading-[20px]">{` a `}</span>
                    <span className="font-['Annapurna_SIL:Bold',sans-serif] leading-[20px]">10</span>
                    <span className="leading-[20px]">{` de `}</span>
                    <span className="font-['Annapurna_SIL:Bold',sans-serif] leading-[20px]">25</span>
                    <span className="leading-[20px]">{` actividades`}</span>
                  </p>
                </Wrapper1>
                <div className="h-[37.6px] relative shrink-0 w-[314.313px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                    <ButtonText text="← Anterior" additionalClassNames="opacity-50 w-[90.338px]" />
                    <div className="h-[37.6px] relative shrink-0 w-[104.5px]" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
                        <div className="bg-[#357324] h-[36px] relative rounded-[10px] shrink-0 w-[31.1px]" data-name="Button">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[8px] relative size-full">
                            <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">1</p>
                          </div>
                        </div>
                        <ButtonText1 text="2" />
                        <ButtonText1 text="3" />
                      </div>
                    </div>
                    <ButtonText text="Siguiente →" additionalClassNames="w-[95.475px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}