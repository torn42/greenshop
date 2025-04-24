// В файле, где определен массив products
import plant1Image from '/src/shared/assets/img/plant1.jpg';
import plant2Image from '/src/shared/assets/img/plant2.jpg';
import plant3Image from '/src/shared/assets/img/plant3.jpg';
import plant4Image from '/src/shared/assets/img/plant4.jpg';
import plant5Image from '/src/shared/assets/img/plant5.jpg';
import plant6Image from '/src/shared/assets/img/plant6.jpg';
import plant7Image from '/src/shared/assets/img/plant7.jpg';
import plant8Image from '/src/shared/assets/img/plant8.jpg';
import plant9Image from '/src/shared/assets/img/plant9.jpg';

export const products = [
  {
    id: 1,
    title: 'Barberton Daisy',
    price: 119,
    imageUrl: plant1Image, // Теперь здесь переменная, содержащая конечный URL
  },
  {
    id: 2,
    title: 'Angel Wing Begonia',
    price: 169,
    imageUrl: plant2Image, // И здесь
  },
  {
    id: 3,
    title: 'African Violet',
    price: 199,
    sale: 13,
    imageUrl: plant3Image,
  },
  {
    id: 4,
    title: 'Beach Spider Lily',
    price: 129,
    imageUrl: plant4Image,
  },
  {
    id: 5,
    title: 'Blushing Bromeliad',
    price: 139,
    imageUrl: plant5Image,
  },
  {
    id: 6,
    title: 'Aluminum Plant',
    price: 179,
    imageUrl: plant6Image,
  },
  {
    id: 7,
    title: "Bird's Nest Fern",
    price: 99,
    imageUrl: plant7Image,
  },
  {
    id: 8,
    title: 'Broadleaf Lady Palm',
    price: 59,
    imageUrl: plant8Image,
  },
  {
    id: 9,
    title: 'Chinese Evergreen',
    price: 39,
    imageUrl: plant9Image,
  },
];
