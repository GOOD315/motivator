import { Component, OnInit } from '@angular/core';

interface IMenuItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  menuItems: IMenuItem[] = [
    {
      name: 'Главная',
      link: 'tasks'
    },
    {
      name: 'Список задач',
      link: 'tasks/list'
    },
    {
      name: 'Новая задача',
      link: 'tasks/new'
    }
  ]

  ngOnInit(): void {
  }

}
