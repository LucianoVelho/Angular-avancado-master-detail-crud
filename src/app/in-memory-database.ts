import { Category } from './pages/categoies/shared/category.model';
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class InMemoryDb implements InMemoryDbService{
  createDb() {
      const categories: Category[] = [
        {id: 1, name:'Moradia', description: 'Pagamentos de conta de casa'},
        {id: 2, name:'Saúde', description: 'Palno de saude'},
        {id: 3, name:'Lazer', description: 'Cinema'},
        {id: 4, name:'Salário', description: 'Recebimento salario'},
        {id: 5, name:'Freelas', description: 'Trabalhos como freelancer'}
      ];
      return {categories}
  }
}
