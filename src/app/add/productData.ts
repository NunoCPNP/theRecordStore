import { ProductType } from '@/shared/types'

type ProductDataTypes = Omit<ProductType, 'id'>

export const productData: ProductDataTypes[] = [
  {
    date_added: '2022-01-23T06:16:13-08:00',
    artist: 'The Beatles',
    title: 'Revolver',
    format: 'vinyl',
    country: 'UK',
    year: 1974,
    label: 'Parlophone',
    catno: 'PCS 7009',
    genres: ['Rock', 'Psychedelic Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/57pfDcGBUoUIpt2PQsR92HuYZ59vK4VQ_-e2jhng7iU/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUxOTMx/ODUtMTYwNTA1MDAx/My0yNjc1LmpwZWc.jpeg',
    price: 40,
    stock: 1,
    notes: '',
  },
  {
    date_added: '2022-01-23T06:30:15-08:00',
    artist: 'The Dickies',
    title: 'The Incredible Shrinking Dickies',
    format: 'vinyl',
    country: 'UK',
    year: 1979,
    label: 'A&M Records',
    catno: 'AMLE 64742',
    genres: ['Rock', 'Punk Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/h2qDsKixL0Do2YguzOq-hzqvbv-XrV25jE_MzFPuoRI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwOTk2/NzQ5LTE1MDc5MDUw/NzMtMTEyNC5qcGVn.jpeg',
    price: 25,
    stock: 2,
    notes: 'Yellow Gold Vinyl',
  },
  {
    date_added: '2022-01-23T06:45:19-08:00',
    artist: 'Led Zeppelin',
    title: 'Led Zeppelin III',
    format: 'vinyl',
    country: 'Germany',
    year: 1970,
    label: 'Atlantic',
    catno: 'ATL-SD 7201',
    genres: ['Rock', 'Blues Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/NV03ZVVrIoiEHNK-N0xjyu-BmMzC_B6HxWxD1V42XEw/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyMjY5/MS0xNTUwODUzMjEz/LTY3NDYuanBlZw.jpeg',
    price: 30,
    stock: 5,
    notes: '',
  },
  {
    date_added: '2022-01-23T05:33:09-08:00',
    artist: 'Mata-Ratos',
    title: 'Rock Radioactivo',
    format: 'vinyl',
    country: 'Portugal',
    year: 1990,
    label: 'EMI',
    catno: '7948641',
    genres: ['Punk Rock', 'Hardcore'],
    status: 'used',
    cover_status: 4,
    item_status: 5,
    cover_image:
      'https://i.discogs.com/b1uWx67V5aSp17joUmrPB29n_uOPHiI_Bay_0BSczx8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0ODk3/NTctMTQ1NDAwNTMy/MC00NjIxLmpwZWc.jpeg',
    price: 45,
    stock: 1,
    notes: '',
  },
  {
    date_added: '2022-01-23T05:41:05-08:00',
    artist: 'Peste & Sida',
    title: 'Veneno',
    format: 'vinyl',
    country: 'Portugal',
    year: 1987,
    label: 'Schiu!',
    catno: 'SLP 018',
    genres: ['Rock', 'Punk Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/1aLJSQOOU3t2z3sRqKkTuyzut9pXmHmyby1KcSxqH7M/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4OTU5/NTUtMTMyNzYxMjY1/Ny5qcGVn.jpeg',
    price: 50,
    stock: 2,
    notes: '',
  },
  {
    date_added: '2022-01-23T05:47:17-08:00',
    artist: 'R.E.M.',
    title: 'Automatic For The People',
    format: 'vinyl',
    country: 'Europe',
    year: 1992,
    label: 'Warner Bros. Records',
    catno: '9362-45055-1',
    genres: ['Rock', 'Alternative Rock'],
    status: 'used',
    cover_status: 5,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/9zq0k_uq2WI89fNpoDRdPDKqyb9HpxUm9WaEfpJ3fjI/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwMzc0/ODEtMTQ1NDQwNTQ3/MC0xNDY1LmpwZWc.jpeg',
    price: 40,
    stock: 1,
    notes: '',
  },
  {
    date_added: '2022-01-23T05:44:01-08:00',
    artist: 'Sex Pistols',
    title: "Never Mind The Bollocks Here's The Sex Pistols",
    format: 'vinyl',
    country: 'Germany',
    year: 1977,
    label: 'Virgin',
    catno: '25 593 XOT',
    genres: ['Punk Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 5,
    cover_image:
      'https://i.discogs.com/KfUTAdMQojkR_vtCK5CDSEXxLSEaTQjGNBo2-i6ltVU/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3Njc5/NTYtMTYyMzE2NDc1/OC02OTU0LmpwZWc.jpeg',
    price: 30,
    stock: 2,
    notes: '',
  },
  {
    date_added: '2022-01-24T10:18:39-08:00',
    artist: 'U2',
    title: 'Achtung Baby',
    format: 'vinyl',
    country: 'Portugal',
    year: 1991,
    label: 'Island Records',
    catno: '212110',
    genres: ['Pop Rock', 'Alternative Rock'],
    status: 'used',
    cover_status: 3,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/_0cVGk8r209SkELrPHKcS6p_RPBIeYwu5QDtr_gsiTs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0MDI1/NjEtMTQ2MDkxMjI5/NS0zNjUzLmpwZWc.jpeg',
    price: 20,
    stock: 4,
    notes: '',
  },
  {
    date_added: '2022-01-24T10:20:05-08:00',
    artist: 'Violent Femmes',
    title: 'Violent Femmes',
    format: 'vinyl',
    country: 'UK',
    year: 1983,
    label: 'Rough Trade',
    catno: 'ROUGH 55',
    genres: ['Indie Rock', 'Alternative Rock', 'Post Punk'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/KuLeYsiLYrwAqeIa3XhV_dKHH1mU9s848v_g1oxVvAM/rs:fit/g:sm/q:90/h:424/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyNTM5/Ny0xMTkxNzUzMTQz/LmpwZWc.jpeg',
    price: 20,
    stock: 3,
    notes: '',
  },
  {
    date_added: '2022-01-24T10:16:46-08:00',
    artist: 'The Waterboys',
    title: 'This Is The Sea',
    format: 'vinyl',
    country: 'Portugal',
    year: 1985,
    label: 'Island Records',
    catno: '10.207095.50',
    genres: ['Rock', 'Folk Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/wQsmgBpIr3iVoEaNGYj1iw5OEyC_B2gBDI6xMwh2Bjc/rs:fit/g:sm/q:90/h:577/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3ODQ1/ODItMTMzNDU3MzEz/Ny5qcGVn.jpeg',
    price: 18,
    stock: 4,
    notes: '',
  },
  {
    date_added: '2022-01-24T10:23:19-08:00',
    artist: 'The Who',
    title: 'The Kids Are Alright',
    format: 'vinyl',
    country: 'UK',
    year: 1979,
    label: 'Polydor',
    catno: '2675 179',
    genres: ['Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/t-Vpt175wNEp748PMzJAKEZniubiakHNto9UNQeYjvU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTg0/OTQtMTU4NTA0MzY1/OC01MTAxLmpwZWc.jpeg',
    price: 35,
    stock: 2,
    notes: '',
  },
  {
    date_added: '2024-02-22T06:16:13-08:00',
    artist: 'Tom Waits',
    title: 'Heartattack And Vine',
    format: 'vinyl',
    country: 'NL',
    year: 2018,
    label: 'Anti',
    catno: '7571-1',
    genres: ['Rock', 'Blues Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/kxBOpSE-rcE3QGaVIJ2QhZlQQWSxVuiYf9nS0sXlOE0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTIw/NDI3LTE1MzY4Nzg5/NTUtNzcyMy5wbmc.jpeg',
    price: 25,
    stock: 1,
    notes: '',
  },
  {
    date_added: '2023-09-24T10:27:16-08:00',
    artist: 'Cigarettes After Sex',
    title: 'Cry',
    format: 'vinyl',
    country: 'Europe',
    year: 2019,
    label: 'Partisan Records',
    catno: 'PTKF2173-1',
    genres: ['Rock', 'Pop', 'Dream Pop'],
    status: 'new',
    cover_status: 5,
    item_status: 5,
    cover_image:
      'https://i.discogs.com/l_p9TgnAVHKUEKtqEdOe_zECABRCY_9cLeU_wT_lhn4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzEy/MTUwLTE1NzIwMDcy/MTEtMTExOC5qcGVn.jpeg',
    price: 30,
    stock: 10,
    notes: '',
  },
  {
    date_added: '2024-01-13T06:16:13-08:00',
    artist: 'Radiohead',
    title: 'The Bends',
    format: 'vinyl',
    country: 'Europe',
    year: 2016,
    label: 'XL Recordings',
    catno: 'XLLP780',
    genres: ['Rock', 'Alternative Rock'],
    status: 'new',
    cover_status: 5,
    item_status: 5,
    cover_image:
      'https://i.discogs.com/_tQWnta8Nx_yHOSpMYSqyYTngMrCWNNsJhSY863AMeo/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg2NTU2/NTgtMTQ2NjAxNTI4/Ny01MjQyLmpwZWc.jpeg',
    price: 30,
    stock: 4,
    notes: '180g',
  },
  {
    date_added: '2023-05-21T06:16:13-08:00',
    artist: 'Peter Green',
    title: 'In The Skies',
    format: 'vinyl',
    country: 'DE',
    year: 1979,
    label: 'Creole Records',
    catno: '6 23793',
    genres: ['Blues Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/z1paRkJkxh4UyaGmOTovbl3gbHyRyh_EaRhrHJIrG3o/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNzMw/NjQtMTI4NjI4MDY0/NS5qcGVn.jpeg',
    price: 15,
    stock: 2,
    notes: '',
  },
  {
    date_added: '2021-04-02T06:16:13-08:00',
    artist: 'AC/DC ',
    title: 'For Those About To Rock We Salute You',
    format: 'vinyl',
    country: 'DE',
    year: 1981,
    label: 'Atlantic',
    catno: 'ATL K 50 851',
    genres: ['Hard Rock'],
    status: 'used',
    cover_status: 4,
    item_status: 4,
    cover_image:
      'https://i.discogs.com/vQnPLU4OtevNiG2NXHf4VPQyPg0ehx4iUb-J6PaV9HE/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMDU5/NC0xNjI4NjkwNjkx/LTI0MTUuanBlZw.jpeg',
    price: 25,
    stock: 2,
    notes: '',
  },
]
