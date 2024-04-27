import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  getFoodById(id: number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsByTag(tag: string ): Foods[]{
    return tag == 'All'?
    this.getAll() :this.getAll().filter(food => food.tags?.includes(tag));
    // if(tag == 'All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag))

  }

  getAllTags(): Tag[] {
    return [
    { name: 'All', count: 10},
    { name: 'fastfood', count: 5},
    { name: 'pizza', count: 10},
    { name: 'lunch', count: 10},
    { name: 'slowfood', count: 10},
    { name: 'burger', count: 10},
    { name: 'fry', count: 10},
    { name: 'soup', count: 10},

    ];
  }
  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'uday',
        price: 100,
        tags: ['human','pizza'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-1.jpg',
        origins: ['indian'],
        cookTime: '10-20',
      },
      {
        id: 2,
        name: 'rama',
        price: 100,
        tags: ['human','pizza'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-2.jpg',
        origins: ['indian'],
        cookTime: '10-20',
      },
      {
        id: 3,
        name: 'red',
        price: 100,
        tags: ['human','pizza'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-3.jpg',
        origins: ['burger'],
        cookTime: '10-20',
      },
      {
        id: 4,
        name: 'blue',
        price: 100,
        tags: ['human','soup'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-4.jpg',
        origins: ['burger'],
        cookTime: '10-20',
      },
      {
        id: 5,
        name: 'black',
        price: 100,
        tags: ['human','soup'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-5.jpg',
        origins: ['pizza'],
        cookTime: '10-20',
      },
      {
        id: 6,
        name: 'grey',
        price: 100,
        tags: ['human','burger'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-6.jpg',
        origins: ['pizza'],
        cookTime: '10-20',
      },
      {
        id: 6,
        name: 'some',
        price: 100,
        tags: ['human','burger'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-7.jpg',
        origins: ['pizza'],
        cookTime: '10-20',
      },
      {
        id: 7,
        name: 'uday1',
        price: 100,
        tags: ['human','fastfood'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-8.jpg',
        origins: ['soup'],
        cookTime: '10-20',
      },
      {
        id: 8,
        name: 'uday2',
        price: 100,
        tags: ['human','food'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['soup'],
        cookTime: '10-20',
      },
      {
        id: 9,
        name: 'uday2',
        price: 100,
        tags: ['human','slowfood'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['soup'],
        cookTime: '10-20',
      },
      {
        id: 10,
        name: 'uday2',
        price: 100,
        tags: ['human','slowfood'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['fastfood'],
        cookTime: '10-20',
      },
      {
        id: 11,
        name: 'uday2',
        price: 100,
        tags: ['human','slowfood'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['fastfood'],
        cookTime: '10-20',
      },
      {
        id: 12,
        name: 'uday2',
        price: 100,
        tags: ['human','fry'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['lunch'],
        cookTime: '10-20',
      },
      {
        id: 13,
        name: 'uday2',
        price: 100,
        tags: ['human','fry'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['lunch'],
        cookTime: '10-20',
      },
      {
        id: 14,
        name: 'uday2',
        price: 100,
        tags: ['human','fry'],
        favorite: true,
        stars: 5,
        imageUrl: '/assets/img-9.jpg',
        origins: ['lunch'],
        cookTime: '10-20',
      }
    ];
  }
}
