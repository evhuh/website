import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  stack: string;
  description: React.ReactNode;
  image?: React.ReactNode;
  tags?: string[];
  github?: string;
};

export function ProjectCard({
  title,
  stack,
  description,
  image,
  tags = [],
  github,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{stack}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {image && (
          <div className="overflow-hidden rounded-md border">
            {image}
          </div>
        )}
        <div className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            GitHub →
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
