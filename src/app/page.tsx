"use client";
import { useState, useEffect } from 'react';
import * as C from './Page.styles';
import { getCurrentMonth, filterListerByMonth } from '../helpers/dateFilter';

import { Item } from '../types/Item';
import { Category } from '../types/Category';

import { categories } from '../data/categories';
import { items } from '../data/items';

import { TableArea } from '../components/TableArea/index';
import { InfoArea } from '../components/InfoArea/index';
import { InsertArea } from '@/components/InsertArea';

const Page = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [ expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList( filterListerByMonth(list, currentMonth) )
  }, [list, currentMonth]);

  useEffect(()=> {
    let incomeCount = 0;  
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string)=> {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);  
  };

  return (
    <C.Main>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      
      <C.Section>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InsertArea onAdd={handleAddItem}/>

        <TableArea 
          list={filteredList} />
      </C.Section>
    </C.Main>
  );
}

export default Page;
