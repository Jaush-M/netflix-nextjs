import { Product, Subscription } from '@stripe/firestore-stripe-payments'
import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Movie } from '../interfaces/movie.interface'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
})

export const planState = atom<Product | null>({
  key: 'planState',
  default: null,
})

export const subscriptionState = atom<Subscription | null>({
  key: 'subscriptionState',
  default: null,
})
