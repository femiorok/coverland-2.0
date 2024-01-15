export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  isTitleBelow?: boolean;
  className?: string;
}

export interface IFrameVideoProps {
  url: string;
  width: string | number;
  height: string | number;
  title: string;
}

export interface ImageCardBoxProps {
  bgImage: string;
  title: string;
  btnText: string;
  btnHandler?: () => void;
}
