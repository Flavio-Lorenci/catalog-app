export interface Animal {
  id: string;
  name: string;
  species: string;
  family: string;
  habitat: string;
  placeOfFound: string;
  diet: string;
  description: string;
  weightKg: number;
  heightCm: number;
  image: string;
}

export interface File {
  imgName: string;
  link: string;
}

export interface CardProps {
  animal: Animal;
}

export interface AnimalFormDialogProps {
  onCancel: () => void;
  animal: Animal | any;
}

export interface AnimalFormDialogProps {
  onSubmit: (values: Animal) => void;
  onCancel: () => void;
}
