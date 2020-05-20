import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { ProductDetail } from '../models/product-detail.model';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  value = [
    { title: 'GPU 1', price: 30, $key: '1qwssdf4', imageUrl: 'assets/images/1.jpg', rating: 3, model: 'Medium' },
    { title: 'GPU 2', price: 16, $key: 'asasdawd', imageUrl: 'assets/images/1.jpg', rating: 4, model: 'Medium' },
    { title: 'GPU 3', price: 25, $key: '1qsefqr2', imageUrl: 'assets/images/1.jpg', rating: 3, model: 'Medium' },
    { title: 'GPU 4', price: 59, $key: 'qwe32zds', imageUrl: 'assets/images/1.jpg', rating: 5, model: 'Medium' },
    { title: 'GPU 5', price: 200, $key: '1qxsdwef', imageUrl: 'assets/images/1.jpg', rating: 3, model: 'Medium' },
    { title: 'GPU 6', price: 160, $key: '1awer3w4', imageUrl: 'assets/images/1.jpg', rating: 3, model: 'Medium' },
    { title: 'GPU 7', price: 135, $key: '2344czsw', imageUrl: 'assets/images/1.jpg', rating: 1, model: 'Medium' },
    { title: 'GPU 8', price: 140, $key: 'sefweffs', imageUrl: 'assets/images/1.jpg', rating: 5, model: 'Medium' },
    { title: 'GPU 9', price: 100, $key: '1qwse34f', imageUrl: 'assets/images/1.jpg', rating: 3, model: 'Medium' },
    { title: 'GPU 10', price: 90, $key: '1sdfwwef', imageUrl: 'assets/images/1.jpg', rating: 2, model: 'Medium' },
    { title: 'GPU 11', price: 75, $key: 'sefewefs', imageUrl: 'assets/images/1.jpg', rating: 3, model: 'Medium' },
    { title: 'GPU 12', price: 88, $key: 'sgee34xd', imageUrl: 'assets/images/1.jpg', rating: 5, model: 'Medium' }];

  products: Observable<Product[]> = new BehaviorSubject(this.value)

  productDetails = {
    '1qwssdf4': {
      $key: '1qwssdf4',
      title: 'GPU 1',
      price: 30,
      prices: [25, 30, 35],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 3,
      reviews: [
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    'asasdawd': {
      $key: 'asasdawd',
      title: 'GPU 2',
      price: 16,
      prices: [12, 16, 20],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 4,
      reviews: [
        { name: 'John Doe', rating: 4, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 4, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 4, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    '1qsefqr2': {
      $key: '1qsefqr2',
      title: 'GPU 3',
      price: 25,
      prices: [20, 25, 30],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 3,
      reviews: [
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    'qwe32zds': {
      $key: 'qwe32zds',
      title: 'GPU 4',
      price: 59,
      prices: [49, 59, 69],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 5,
      reviews: [
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    '1qxsdwef': {
      $key: '1qxsdwef',
      title: 'GPU 5',
      price: 200,
      prices: [100, 200, 300],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 3,
      reviews: [
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    '1awer3w4': {
      $key: '1awer3w4',
      title: 'GPU 6',
      price: 160,
      prices: [150, 160, 170],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 3,
      reviews: [
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    '2344czsw': {
      $key: '2344czsw',
      title: 'GPU 7',
      price: 135,
      prices: [125, 135, 145],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 1,
      reviews: [
        { name: 'John Doe', rating: 1, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 1, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 1, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    'sefweffs': {
      $key: 'sefweffs',
      title: 'GPU 8',
      price: 140,
      prices: [120, 140, 160],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 5,
      reviews: [
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    '1qwse34f': {
      $key: '1qwse34f',
      title: 'GPU 9',
      price: 100,
      prices: [90, 100, 110],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 3,
      reviews: [
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    '1sdfwwef': {
      $key: '1sdfwwef',
      title: 'GPU 10',
      price: 90,
      prices: [80, 90, 100],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 2,
      reviews: [
        { name: 'John Doe', rating: 2, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 2, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 2, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    'sefewefs': {
      $key: 'sefewefs',
      title: 'GPU 11',
      price: 75,
      prices: [65, 75, 85],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 3,
      reviews: [
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 3, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    },
    'sgee34xd': {
      $key: 'sgee34xd',
      title: 'GPU 12',
      price: 88,
      prices: [78, 88, 98],
      imageUrls: ['assets/images/1.jpg', 'assets/images/2.jpg', 'assets/images/1.jpg'],
      models: ['Small', 'Medium', 'Large'],
      model: 'Medium',
      rating: 5,
      reviews: [
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
        { name: 'John Doe', rating: 5, timestamp: new Date(), comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, magni earum aperiam sapiente eos corrupti veritatis fugit, fuga provident alias in maxime itaque tempora ipsum non. Dignissimos, omnis. Voluptatum accusamus itaque necessitatibus tempore. Suscipit similique consequuntur distinctio aut ipsam itaque!' },
      ],
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ea voluptates repellat porro, commodisimilique adipisci, magni nulla veniam temporibus, amet eligendi alias provident totam exercitationem delectus laborum possimus molestiae!'
    }
  }

  constructor(private cartService: ShoppingCartService) { }


  getAllProducts(): Observable<Product[]> {
    return this.products;
  }

  getproductDetail($key): Observable<ProductDetail> {
    return new BehaviorSubject(this.productDetails[$key])
  }

  getRatingStar(value) {
    let classes = []
    for (let i = 0; i <= 4; i++) {
      if (value - 1 >= i)
        classes.push('fa-star')
      else
        classes.push('fa-star-o')
    }
    return classes
  }

  setProductModel(key, value) {
    this.cartService.getCartItems().subscribe(res => {
      res.forEach(item => {
        if (item.$key === key)
          item.model = value
      })
    })
    this.value.forEach(item => {
      if (item.$key === key)
        item.model = value
    });

  }


}
