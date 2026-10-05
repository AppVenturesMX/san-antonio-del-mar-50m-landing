import { BedDouble, Bath, Waves, Car, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: BedDouble,
    title: "3 recámaras + espacio flexible",
    description:
      "Recámara principal con acceso a terraza, dos recámaras secundarias y un espacio flexible, ideal para home office o estancia adicional.",
  },
  {
    icon: Bath,
    title: "2.5 baños",
    description:
      "Dos baños completos y un medio baño para visitas, con acabados de calidad.",
  },
  {
    icon: Waves,
    title: "Vista al mar",
    description:
      "Vista frontal al mar desde los espacios principales de la casa.",
  },
  {
    icon: Car,
    title: "2 espacios de estacionamiento",
    description:
      "Cochera techada con capacidad para dos vehículos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad 24/7",
    description:
      "Fraccionamiento con vigilancia 24 horas, en una calle con muy poco tránsito.",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Espacios pensados para disfrutar la vista al mar
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            3 recámaras y 2.5 baños, con un espacio flexible ideal para home
            office o estancia adicional.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
