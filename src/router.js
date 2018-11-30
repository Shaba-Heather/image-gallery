import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Artists from './components/artists/Artists';
import NewArtist from './components/artists/NewArtist';
import ArtistDetail from './components/artists/ArtistDetail';
import RecordsView from './components/artists/records/RecordsView';
import ListView from './components/artists/records/ListView';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/artists', component: Artists },
    { path: '/artists/new', component: NewArtist },
    { 
      path: '/artists/:name',
      component: ArtistDetail,
      children: [
        { path: 'records', component: RecordsView },
        { path: 'song-list', component: ListView },
        { path: '', redirect: 'song-list' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
});