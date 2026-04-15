import clsx from "clsx";
import svgPaths from "./svg-cezovk8ubu";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[16px] top-[2.1px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ children, additionalClassNames = "" }: React.PropsWithChildren<IconProps>) {
  return (
    <div className={clsx("absolute size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#401c08] text-[14px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-white h-[43.2px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(64,28,8,0.5)] whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function SistemaWebDeGanado() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Sistema Web de Ganado">
      <div className="bg-[rgba(242,234,194,0.1)] h-[999.975px] relative shrink-0 w-full" data-name="RegisterPage">
        <div className="absolute bg-[#401c08] content-stretch flex flex-col h-[116px] items-start left-0 pt-[24px] px-[100px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[1448px]" data-name="Header">
          <div className="content-stretch flex h-[68px] items-center justify-between relative shrink-0 w-full" data-name="Container">
            <div className="flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
                  <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[36px] left-[579.85px] not-italic text-[30px] text-center text-white top-[-1px] whitespace-nowrap">Registro de Usuario</p>
                </div>
                <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(255,255,255,0.8)] text-center">Sistema de Regulación y Control de Ganado</p>
                </div>
              </div>
            </div>
            <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[88.363px]" data-name="Button">
              <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <Icon additionalClassNames="left-[10.8px] top-[8px]">
                  <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </Icon>
                <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[59.3px] not-italic text-[#401c08] text-[14px] text-center top-[6px] whitespace-nowrap">Volver</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col h-[647.987px] items-start left-[100px] pt-[32px] px-[176px] rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[164px] w-[1248px]" data-name="Main Content">
          <div className="content-stretch flex flex-col gap-[24px] h-[583.987px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex h-[63.987px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="h-[63.987px] relative shrink-0 w-[225.038px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                  <div className="h-[31.988px] relative shrink-0 w-full" data-name="Heading 3">
                    <p className="absolute font-['Annapurna_SIL:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#401c08] text-[24px] top-[0.2px] whitespace-nowrap">Datos Personales</p>
                  </div>
                  <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
                    <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Completa la información requerida</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#5a7324] h-[21.587px] relative rounded-[8px] shrink-0 w-[73.638px]" data-name="Badge">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] size-full">
                  <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Paso 2 de 3</p>
                </div>
                <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
            <div className="h-[420px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-0 top-0 w-[440px]" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                  <Icon additionalClassNames="left-0 top-[2.1px]">
                    <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon>
                  <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[20px] not-italic text-[#401c08] text-[14px] top-0 whitespace-nowrap">Nombre Completo *</p>
                </div>
                <Text text="Juan Pérez García" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-[456px] top-0 w-[440px]" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                  <Icon additionalClassNames="left-0 top-[2.1px]">
                    <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon>
                  <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[20px] not-italic text-[#401c08] text-[14px] top-0 whitespace-nowrap">Correo Electrónico *</p>
                </div>
                <Text text="correo@ejemplo.com" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-0 top-[87.2px] w-[440px]" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                  <Wrapper>
                    <g clipPath="url(#clip0_264_1059)" id="Icon">
                      <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                    <defs>
                      <clipPath id="clip0_264_1059">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </Wrapper>
                  <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[20px] not-italic text-[#401c08] text-[14px] top-0 whitespace-nowrap">Teléfono *</p>
                </div>
                <Text text="555-123-4567" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-[456px] top-[87.2px] w-[440px]" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                  <Icon additionalClassNames="left-0 top-[2.1px]">
                    <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon>
                  <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[20px] not-italic text-[#401c08] text-[14px] top-0 whitespace-nowrap">Ciudad *</p>
                </div>
                <Text text="Guadalajara" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-0 top-[174.4px] w-[896px]" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                  <Icon additionalClassNames="left-0 top-[2.1px]">
                    <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon>
                  <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[20px] not-italic text-[#401c08] text-[14px] top-0 whitespace-nowrap">Dirección Completa *</p>
                </div>
                <Text text="Calle, número, colonia" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-0 top-[261.6px] w-[440px]" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
                  <Wrapper>
                    <g clipPath="url(#clip0_264_1046)" id="Icon">
                      <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                    <defs>
                      <clipPath id="clip0_264_1046">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </Wrapper>
                  <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[20px] not-italic text-[#401c08] text-[14px] top-0 whitespace-nowrap">Nombre del Rancho *</p>
                </div>
                <Text text="Rancho El Ejemplo" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-[456px] top-[261.6px] w-[440px]" data-name="Container">
                <LabelText text="Capacidad (Animales) *" />
                <div className="bg-white h-[43.2px] relative rounded-[8px] shrink-0 w-full" data-name="Number Input">
                  <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[71.2px] items-start left-0 top-[348.8px] w-[440px]" data-name="Container">
                <LabelText text="Superficie (Hectáreas) *" />
                <Text text="50" />
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[52px] items-start justify-end pt-[16px] relative shrink-0 w-full" data-name="Container">
              <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[82.05px]" data-name="Button">
                <div aria-hidden="true" className="absolute border-[#401c08] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.8px] py-[8.8px] relative size-full">
                  <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#401c08] text-[14px] text-center whitespace-nowrap">Regresar</p>
                </div>
              </div>
              <div className="bg-[#5a7324] h-[36px] relative rounded-[8px] shrink-0 w-[111.662px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[40px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">Continuar</p>
                  <Icon additionalClassNames="left-[83.66px] top-[10px]">
                    <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#401c08] content-stretch flex flex-col gap-[8px] h-[91.988px] items-start left-0 pt-[24px] px-[100px] top-[907.99px] w-[1448px]" data-name="Footer">
          <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
            <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">© 2026 Sistema de Regulación y Control de Ganado · Gobierno Federal</p>
          </div>
          <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[624.28px] not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-center top-[-0.8px] whitespace-nowrap">Certificación veterinaria oficial · Trazabilidad garantizada</p>
          </div>
        </div>
      </div>
    </div>
  );
}