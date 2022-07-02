export interface IGetBrowseCategories {
  categories: {
    href: string;
    items: IBrowseCategoryItem[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
}

interface IBrowseCategoryItem {
  href: string;
  icons: [
    {
      height: null | number;
      url: string;
      width: null | number;
    }
  ];
  id: string;
  name: string;
}
