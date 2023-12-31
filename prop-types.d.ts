export type AnimeProps = {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
};
export type AnimeCardComponentProps = {
  anime: {
    id: string;
    name: string;
    image: {
      original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
  };
  index: number;
  counter: number;
};
