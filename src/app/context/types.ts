export interface ContextInsideProps {
  language: string;
  messages?: ContextMessages;
}

export interface ContextMessages {
  [key: string]: {
    [key: string]: {
      [key: string]: string | string[];
    };
  }
}

export interface ContextProps {
    info: ContextInsideProps;
    setInfo: (info: ContextInsideProps) => void;
}
