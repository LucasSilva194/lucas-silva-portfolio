import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

const accordionGroups = [
  {
    title: "Core",
    description: "The languages behind product work and platform logic.",
    skills: skillGroups[0].skills,
  },
  {
    title: "Interfaces",
    description: "Responsive, maintainable web experiences for real teams.",
    skills: skillGroups[1].skills,
  },
  {
    title: "Systems",
    description: "Services, data, and the contracts that keep them reliable.",
    skills: [...skillGroups[2].skills, ...skillGroups[3].skills],
  },
  {
    title: "Delivery",
    description: "Integrations, deployment, source control, and testing.",
    skills: [
      ...skillGroups[4].skills,
      ...skillGroups[5].skills,
      ...skillGroups[6].skills,
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-spacing border-y border-border/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="One toolkit, from interface to infrastructure."
          description="I work across the full delivery path: shaping the interaction, building the service behind it, and keeping the system understandable after launch."
        />

        <div className="flex min-h-[42rem] flex-col overflow-hidden rounded-lg border border-border bg-border lg:min-h-[34rem] lg:flex-row">
          {accordionGroups.map((group) => (
            <article
              key={group.title}
              className="group relative flex flex-1 flex-col justify-between overflow-hidden bg-card p-6 transition-[flex-grow,background-color] duration-700 ease-out hover:flex-[2.15] hover:bg-muted/70 lg:p-8"
            >
              <div className="absolute inset-y-0 right-0 hidden w-px bg-border lg:block" />
              <div>
                <span className="block h-1 w-10 bg-primary transition-all duration-500 group-hover:w-20" />
                <h3 className="mt-7 text-3xl font-medium tracking-[-0.045em] text-foreground [writing-mode:horizontal-tb] lg:text-4xl">
                  {group.title}
                </h3>
                <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
                  {group.description}
                </p>
              </div>

              <div className="mt-12 flex max-w-sm flex-wrap gap-2 lg:translate-y-4 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex rounded-full border border-primary/15 bg-primary/[0.07] px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
