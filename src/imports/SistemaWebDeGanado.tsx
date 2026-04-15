import clsx from "clsx";
import svgPaths from "./svg-d0pm1voyo4";
import imgImageBovinos from "figma:asset/04170f09840fe414cea00fc5e9d78b263b4378cc.png";
import imgImagePorcinos from "figma:asset/a64cbb1165ae8fe9bc7b24db0bcef4ce1eecb5d8.png";
import imgImageOvinos from "figma:asset/8395e916f0f7f8b2a5cb0a3fc6c6be883ded1252.png";
import imgImageCaprinos from "figma:asset/66ec3bf924ecd471c1df563beece5955a3139cd1.png";
import imgImageAvesDeCorral from "figma:asset/25337db2b18ee2fcfd751084a4e0c19e5e0ed995.png";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[80px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#5a7324] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
type AnimalTypeGridTextProps = {
  text: string;
};

function AnimalTypeGridText({ text }: AnimalTypeGridTextProps) {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[24px] top-[196px] w-[348.8px]">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#717182] text-[14px]">{text}</p>
    </div>
  );
}
type CardDescriptionTextProps = {
  text: string;
};

function CardDescriptionText({ text }: CardDescriptionTextProps) {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start left-[24px] top-[148px] w-[348.8px]">
      <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(64,28,8,0.7)]">{text}</p>
    </div>
  );
}
type CardTitleTextProps = {
  text: string;
};

function CardTitleText({ text }: CardTitleTextProps) {
  return (
    <div className="absolute h-[16px] left-[24px] top-[126px] w-[348.8px]">
      <p className="absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#401c08] text-[16px] top-[-1px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("bg-[#5a7324] h-[32px] relative rounded-[26843500px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function SistemaWebDeGanado() {
  return (
    <div className="bg-white relative size-full" data-name="Sistema Web de Ganado">
      <div className="absolute bg-[#401c08] content-stretch flex flex-col h-[116px] items-start left-0 pt-[24px] px-[100px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[1448px]" data-name="Header">
        <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between relative size-full">
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
                  <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #401C08)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                  <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] left-[56.8px] not-italic text-[#401c08] text-[14px] text-center top-[6px] whitespace-nowrap">Inicio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[68.8px] items-start left-0 pb-[0.8px] pt-[16px] px-[388px] top-[116px] w-[1448px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[rgba(90,115,36,0.2)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
        <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-0 w-[672px]" data-name="Input">
            <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
              <p className="font-['Annapurna_SIL:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">Buscar por nombre del rancho...</p>
            </div>
            <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(90,115,36,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="absolute left-[12px] size-[20px] top-[8px]" data-name="Icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Icon">
                <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #5A7324)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] h-[674.4px] items-start left-[84px] pt-[32px] px-[16px] top-[184.8px] w-[1280px]" data-name="AnimalTypeGrid">
        <div className="content-stretch flex flex-col gap-[8px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
            <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[36px] left-[624.59px] not-italic text-[#401c08] text-[24px] text-center top-[-0.2px] whitespace-nowrap">Sistema de Regulación y Control de Ganado</p>
          </div>
          <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Paragraph">
            <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#717182] text-[16px] text-center">Seleccione un tipo de animal para ver el inventario certificado</p>
          </div>
        </div>
        <div className="h-[510.4px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid h-[243.2px] left-0 rounded-[14px] top-0 w-[400px]" data-name="Card">
            <div className="absolute h-[172px] left-0 top-0 w-[396.8px]" data-name="CardHeader">
              <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[24px] top-[24px] w-[348.8px]" data-name="AnimalTypeGrid">
                <Container>
                  <div className="h-[76.8px] relative shrink-0 w-full" data-name="Image (Bovinos)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBovinos} />
                  </div>
                </Container>
                <ContainerText text="245" additionalClassNames="w-[48.338px]" />
              </div>
              <CardTitleText text="Bovinos" />
              <CardDescriptionText text="Ganado vacuno certificado" />
            </div>
            <AnimalTypeGridText text="Click para ver animales registrados" />
          </div>
          <div className="absolute bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid h-[243.2px] left-[424px] rounded-[14px] top-0 w-[400px]" data-name="Card">
            <div className="absolute h-[172px] left-0 top-0 w-[396.8px]" data-name="CardHeader">
              <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[24px] top-[24px] w-[348.8px]" data-name="AnimalTypeGrid">
                <Container>
                  <div className="h-[76.8px] relative shrink-0 w-full" data-name="Image (Porcinos)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePorcinos} />
                  </div>
                </Container>
                <ContainerText text="189" additionalClassNames="w-[48.338px]" />
              </div>
              <CardTitleText text="Porcinos" />
              <CardDescriptionText text="Cerdos y porcinos registrados" />
            </div>
            <AnimalTypeGridText text="Click para ver animales registrados" />
          </div>
          <div className="absolute bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid h-[243.2px] left-[848px] rounded-[14px] top-0 w-[400px]" data-name="Card">
            <div className="absolute h-[172px] left-0 top-0 w-[396.8px]" data-name="CardHeader">
              <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[24px] top-[24px] w-[348.8px]" data-name="AnimalTypeGrid">
                <Container>
                  <div className="h-[76.8px] relative shrink-0 w-full" data-name="Image (Ovinos)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageOvinos} />
                  </div>
                </Container>
                <ContainerText text="312" additionalClassNames="w-[48.338px]" />
              </div>
              <CardTitleText text="Ovinos" />
              <CardDescriptionText text="Ovejas y corderos" />
            </div>
            <AnimalTypeGridText text="Click para ver animales registrados" />
          </div>
          <div className="absolute bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid h-[243.2px] left-0 rounded-[14px] top-[267.2px] w-[400px]" data-name="Card">
            <div className="absolute h-[172px] left-0 top-0 w-[396.8px]" data-name="CardHeader">
              <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[24px] top-[24px] w-[348.8px]" data-name="AnimalTypeGrid">
                <Container>
                  <div className="h-[76.8px] relative shrink-0 w-full" data-name="Image (Caprinos)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCaprinos} />
                  </div>
                </Container>
                <ContainerText text="156" additionalClassNames="w-[48.338px]" />
              </div>
              <CardTitleText text="Caprinos" />
              <CardDescriptionText text="Cabras y cabritos" />
            </div>
            <AnimalTypeGridText text="Click para ver animales registrados" />
          </div>
          <div className="absolute bg-white border-[1.6px] border-[rgba(90,115,36,0.2)] border-solid h-[243.2px] left-[424px] rounded-[14px] top-[267.2px] w-[400px]" data-name="Card">
            <div className="absolute h-[172px] left-0 top-0 w-[396.8px]" data-name="CardHeader">
              <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[24px] top-[24px] w-[348.8px]" data-name="AnimalTypeGrid">
                <Container>
                  <div className="h-[76.8px] relative shrink-0 w-full" data-name="Image (Aves de Corral)">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageAvesDeCorral} />
                  </div>
                </Container>
                <ContainerText text="1523" additionalClassNames="w-[56.438px]" />
              </div>
              <CardTitleText text="Aves de Corral" />
              <CardDescriptionText text="Pollos, gallinas y pavos" />
            </div>
            <AnimalTypeGridText text="Click para ver animales registrados" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#401c08] content-stretch flex flex-col gap-[8px] h-[91.988px] items-start left-0 pt-[24px] px-[100px] top-[907.2px] w-[1448px]" data-name="Footer">
        <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
          <p className="flex-[1_0_0] font-['Annapurna_SIL:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[14px] text-center text-white">© 2026 Sistema de Regulación y Control de Ganado · Gobierno Federal</p>
        </div>
        <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
          <p className="-translate-x-1/2 absolute font-['Annapurna_SIL:Regular',sans-serif] leading-[16px] left-[624.28px] not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-center top-[-0.8px] whitespace-nowrap">Certificación veterinaria oficial · Trazabilidad garantizada</p>
        </div>
      </div>
    </div>
  );
}