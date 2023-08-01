export {};

declare global {
    interface UserInfo {
        username: string;
        profileUrl: string;
    }

    interface HERITAGE {
        id: string;
        name: string;
        address?: string;
        excavationLocation?: string;
        currentLocation?: string;
        era?: string;
        category?: string;
        size?: string;
        collectionNumber?: string;
        imageUrl?: string;
        value?: number;
        startDate?: string;
        expiredDate?: string;
        description?: string;
    }
}
