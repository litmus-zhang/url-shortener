export interface UrlList {
    id: string;
    longUrl: string;
    shortUrl: string;
    createdAt: string;
    updatedAt: string;
    NumberOfVisits: number;
}

export const baseUrl = 'http://localhost:3000/';