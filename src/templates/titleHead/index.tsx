import { Img } from "@/components/Image";

export const TitleHead = ({ title }: { title?: string }) => {
  return (
    <div className="flex items-center">
      <div className="w-20">
        <Img src="https://kurofes-dashin.com/pictures/2025/sample01.png" />
      </div>
      {title && (
        <div className="font-serif italic text-5xl text-fuchsia-400">
          {title}
        </div>
      )}
    </div>
  );
};
