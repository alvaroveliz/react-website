export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    date: string;
    link: string;
    content: string;
    excerpt: {
        rendered: string;
    };
    categories: Array<number>;
}
