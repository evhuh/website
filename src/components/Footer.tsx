import { Highlight } from "@/components/Highlight";

export function Footer() {
  return (
    <footer className="mt-32 mb-12">
      <div className="px-5 py-8"></div>

      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm text-muted-foreground">
          this is the bottom of the page! | {" "}
          <Highlight>
          <a
            href="mailto:e.zheng@yale.edu"
            className="hover:text-foreground transition"
          >
            💌 say hi →
          </a>
          </Highlight>
        </p>
      </div>
    </footer>
  );
}
