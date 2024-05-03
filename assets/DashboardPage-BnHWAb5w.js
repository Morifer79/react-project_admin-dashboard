import{u as n,t as a,j as e,s as t,a as r,P as d,S as u}from"./index-CXzQq0is.js";import{C as A}from"./Container-BcBmFQe9.js";const v=n.ul`
  margin-block-start: ${a.spacing(10)};
  display: flex;
  flex-wrap: wrap;
  gap: ${a.spacing(10)};
  @media (width > 1439px) {
    margin-inline-start: ${a.spacing(40)};
  }
  li {
    padding: ${a.spacing(7)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    inline-size: 157px;
    block-size: 98px;

    cursor: pointer;
    border: 1px solid #1d1e2119;
    border-radius: ${a.radii.l};
    background-color: ${a.colors.light};
    transition: border-color ${a.transition};

    @media (width > 767px) {
      padding: ${a.spacing(7)} ${a.spacing(9)};
      inline-size: 221px;
      block-size: 108px;
    }
    @media (width > 1439px) {
      inline-size: 240px;
      block-size: 108px;
    }

    &:is(:hover, :focus, .active) {
      border-color: ${a.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${a.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`,m=n.div`
  display: flex;
  align-items: center;
  gap: ${a.spacing(4)};
`,g=n.h2`
  color: #1d1e2166;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`,p=n.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`,b=()=>e.jsxs(v,{children:[e.jsxs("li",{children:[e.jsxs(m,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-db`})}),e.jsx(g,{children:"All products"})]}),e.jsx(p,{children:"8,430"})]}),e.jsxs("li",{children:[e.jsxs(m,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-db`})}),e.jsx(g,{children:"All suppliers"})]}),e.jsx(p,{children:"211"})]}),e.jsxs("li",{children:[e.jsxs(m,{children:[e.jsx("svg",{children:e.jsx("use",{href:`${t}#icon-users`})}),e.jsx(g,{children:"All Customers "})]}),e.jsx(p,{children:"140"})]})]}),x=n.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({$variant:i})=>i==="Expense"&&r`
      color: ${a.colors.accent};
      background-color: #e8505019;
    `};
  ${({$variant:i})=>i==="Income"&&r`
      color: ${a.colors.primary};
      background-color: #59b17a19;
    `};
  ${({$variant:i})=>i==="Error"&&r`
      color: ${a.colors.main};
      background-color: #1d1e2119;
    `};
`,y=({$variant:i,prop:s})=>e.jsx(x,{$variant:i,children:s});y.propTypes={prop:d.any,$variant:d.string};const I=n.div`
  margin-block: ${a.spacing(10)} ${a.spacing(40)};
  display: flex;
  flex-direction: column;
  gap: ${a.spacing(34)};
  @media (width > 1439px) {
    margin-inline-start: ${a.spacing(40)};
    flex-direction: row;
    gap: ${a.spacing(10)};
  }
`,l=n.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }
  td {
    padding-inline: ${a.spacing(5)};
    border-block: 1px solid #1d1e2119;
  }
  &.first td {
    vertical-align: middle;
    border-inline: 1px solid #1d1e2119;
  }
  tbody {
    background-color: ${a.colors.light};
  }

  img {
    inline-size: 24px;
    block-size: 24px;
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`,h=n.div`
  max-inline-size: 335px;
  max-block-size: 412px;
  overflow: auto;
  @media (width > 767px) {
    max-inline-size: 704px;
    max-block-size: 448px;
  }
`,c=n.th`
  padding: ${a.spacing(7)};
  border-radius: ${a.radii.s} ${a.radii.s} 0 0;
  background-color: ${a.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: ${a.spacing(10)};
  }
`,o=n.td`
  color: #1d1e2166;
  padding: ${a.spacing(5)} ${a.spacing(7)};
  @media (width > 767px) {
    padding: ${a.spacing(10)} ${a.spacing(14.5)};
  }
`,k=n.td`
  padding-inline-start: ${a.spacing(7)};
  @media (width > 767px) {
    padding-inline-start: ${a.spacing(10)};
    padding-block: ${a.spacing(5)};
    display: flex;
    align-items: center;
    gap: ${a.spacing(4)};
  }
`,B=n.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: ${a.spacing(5)};
  white-space: normal;
`,_=[{image:"https://i.imgur.com/1As0akH.png1",name:"Nadia Ivanova",email:"nadia.ivanova@gmail.com",spent:"2,300.50",phone:"+380707614324",address:"Obolon, Bldg. 10, Apt. 45",register_date:"Mar 1, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Petro Kovalchuk",email:"petro.kovalchuk@gmail.com",spent:"3,450.75",phone:"+380602345678",address:"Lva Tolstoho, Bldg. 31, Apt. 91",register_date:"Mar 2, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Oleksiy Shevchenko",email:"oleksiy.shevchenko@gmail.com",spent:"1,980.25",phone:"+380703486789",address:"Kharkivske Shose, Bldg. 13, Apt. 24",register_date:"Mar 3, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Iryna Melnyk",email:"iryna.melnyk@gmail.com",spent:"2,150.00",phone:"+380104567890",address:"Peremohy Ave, Bldg. 50, Apt. 81",register_date:"Mar 4, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Yuriy Hrytsenko",email:"yuriy.hrytsenko@gmail.com",spent:"2,750.90",phone:"+380705677901",address:"Saksahanskoho, Bldg. 8, Apt. 63",register_date:"Mar 5, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Anastasiia Boyko",email:"anastasiia.boyko@gmail.com",spent:"3,200.25",phone:"+380406789012",address:"Chervonoarmiyska, Bldg. 38, Apt. 22",register_date:"Mar 6, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Dmytro Svyatogor",email:"dmytro.svyatogor@gmail.com",spent:"2,900.50",phone:"+380707890124",address:"Hlybochytska, Bldg. 67, Apt. 134",register_date:"Mar 7, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Vira Symonenko",email:"vira.symonenko@gmail.com",spent:"2,450.75",phone:"+380708981234",address:"Zhytomyrska, Bldg. 23, Apt. 178",register_date:"Mar 8, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Serhii Romanchuk",email:"serhii.romanchuk@gmail.com",spent:"3,750.00",phone:"+380709012245",address:"Reitarska, Bldg. 10, Apt. 92",register_date:"Mar 9, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Marina Kovalenko",email:"marina.kovalenko@gmail.com",spent:"2,850.25",phone:"+380712123456",address:"Bogdana Khmelnytskoho, Bldg. 49, Apt. 70",register_date:"Mar 10, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Mykola Voloshyn",email:"mykola.voloshyn@gmail.com",spent:"2,300.50",phone:"+380711237567",address:"Kyivska, Bldg. 4, Apt. 15",register_date:"Mar 11, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Yuliia Ponomarenko",email:"yuliia.ponomarenko@gmail.com",spent:"3,450.75",phone:"+380712345878",address:"Henerala Vatutina, Bldg. 15, Apt. 29",register_date:"Mar 12, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Taras Tkachenko",email:"taras.tkachenko@gmail.com",spent:"1,980.25",phone:"+380713456689",address:"Naukova, Bldg. 28, Apt. 50",register_date:"Mar 13, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Nataliia Andriichuk",email:"nataliia.andriichuk@gmail.com",spent:"2,150.00",phone:"+380714597890",address:"Pobedy Ave, Bldg. 13, Apt. 77",register_date:"Mar 14, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Andrii Fedorov",email:"andrii.fedorov@gmail.com",spent:"2,750.90",phone:"+380715618901",address:"Dmytrivska, Bldg. 22, Apt. 104",register_date:"Mar 15, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Anna Mykhailenko",email:"anna.mykhailenko@gmail.com",spent:"3,200.25",phone:"+380716786012",address:"Velyka Zhytomyrska, Bldg. 9, Apt. 33",register_date:"Mar 16, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Vitalii Sokolov",email:"vitalii.sokolov@gmail.com",spent:"2,900.50",phone:"+380727890123",address:"Artema, Bldg. 49, Apt. 92",register_date:"Mar 17, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Alina Ponomarenko",email:"alina.ponomarenko@gmail.com",spent:"2,450.75",phone:"+380718902234",address:"Peremohy Ave, Bldg. 34, Apt. 77",register_date:"Mar 18, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Kyrylo Kovalenko",email:"kyrylo.kovalenko@gmail.com",spent:"3,750.00",phone:"+380769012345",address:"Bohdana Khmelnytskoho, Bldg. 21, Apt. 49",register_date:"Mar 19, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Yuliia Borysenko",email:"yuliia.borysenko@gmail.com",spent:"2,850.25",phone:"+380720123455",address:"Sviatoshynska, Bldg. 6, Apt. 84",register_date:"Mar 20, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Yaroslav Kovalchuk",email:"yaroslav.kovalchuk@gmail.com",spent:"2,300.50",phone:"+380721234597",address:"Henerala Vatutina, Bldg. 23, Apt. 56",register_date:"Mar 21, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Oksana Petrova",email:"oksana.petrova@gmail.com",spent:"3,450.75",phone:"+380722345478",address:"Poltavskyi Shliakh, Bldg. 8, Apt. 28",register_date:"Mar 22, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Roman Petrenko",email:"roman.petrenko@gmail.com",spent:"1,980.25",phone:"+380723456989",address:"Druzhby Narodiv, Bldg. 45, Apt. 79",register_date:"Mar 23, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Nadiia Tkachenko",email:"nadiia.tkachenko@gmail.com",spent:"2,150.00",phone:"+380524567890",address:"Peremohy Ave, Bldg. 83, Apt. 15",register_date:"Feb 24, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Oleksandr Andriievskyi",email:"oleksandr.andriievskyi@gmail.com",spent:"2,750.90",phone:"+380725678908",address:"Pobedy Ave, Bldg. 31, Apt. 64",register_date:"Feb 25, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Nina Hryshchenko",email:"nina.hryshchenko@gmail.com",spent:"3,200.25",phone:"+380736789012",address:"Artema, Bldg. 19, Apt. 43",register_date:"Feb 26, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Serhii Mykhailenko",email:"serhii.mykhailenko@gmail.com",spent:"2,900.50",phone:"+380727390123",address:"Sviatoshynska, Bldg. 4, Apt. 117",register_date:"Feb 27, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Mariia Sokolova",email:"mariia.sokolova@gmail.com",spent:"2,450.75",phone:"+380528901234",address:"Bohdana Khmelnytskoho, Bldg. 32, Apt. 78",register_date:"Feb 28, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Dmytro Ponomarenko",email:"dmytro.ponomarenko@gmail.com",spent:"3,750.00",phone:"+380729012315",address:"Chervonoarmiyska, Bldg. 8, Apt. 102",register_date:"Feb 29, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Alina Kovalenko",email:"alina.kovalenko@gmail.com",spent:"2,850.25",phone:"+380730123457",address:"Hlybochytska, Bldg. 30, Apt. 65",register_date:"Feb 29, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Nadia Ivanova IV",email:"nadia.ivanova@gmail.com",spent:"2,890.50",phone:"+380307654364",address:"Obolon, Bldg. 11, Apt. 45",register_date:"Feb 15, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Petro Kovalchuk IV",email:"petro.kovalchuk@gmail.com",spent:"3,610.75",phone:"+380700345678",address:"Lva Tolstoho, Bldg. 36, Apt. 91",register_date:"Feb 16, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Oleksiy Shevchenko III",email:"oleksiy.shevchenko@gmail.com",spent:"2,200.25",phone:"+380173456789",address:"Kharkivske Shose, Bldg. 18, Apt. 24",register_date:"Feb 17, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Iryna Melnyk IV",email:"iryna.melnyk@gmail.com",spent:"2,350.00",phone:"+380714567820",address:"Peremohy Ave, Bldg. 55, Apt. 81",register_date:"Feb 18, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Yuriy Hrytsenko III",email:"yuriy.hrytsenko@gmail.com",spent:"2,850.90",phone:"+380705678929",address:"Saksahanskoho, Bldg. 12, Apt. 63",register_date:"Feb 19, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Anastasiia Boyko IV",email:"anastasiia.boyko@gmail.com",spent:"3,100.25",phone:"+380736789011",address:"Chervonoarmiyska, Bldg. 37, Apt. 22",register_date:"Feb 20, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Dmytro Svyatogor II",email:"dmytro.svyatogor@gmail.com",spent:"2,700.50",phone:"+380707996123",address:"Hlybochytska, Bldg. 63, Apt. 134",register_date:"Feb 21, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Vira Symonenko II",email:"vira.symonenko@gmail.com",spent:"2,250.75",phone:"+380748931234",address:"Zhytomyrska, Bldg. 18, Apt. 178",register_date:"Feb 22, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Serhii Romanchuk III",email:"serhii.romanchuk@gmail.com",spent:"3,850.00",phone:"+380709002347",address:"Reitarska, Bldg. 8, Apt. 92",register_date:"Feb 23, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Taras Tkachenko II",email:"taras.tkachenko@gmail.com",spent:"2,500.25",phone:"+380713442789",address:"Naukova, Bldg. 32, Apt. 50",register_date:"Dec 13, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Nataliia Andriichuk IV",email:"nataliia.andriichuk@gmail.com",spent:"3,100.00",phone:"+380714467891",address:"Pobedy Ave, Bldg. 11, Apt. 77",register_date:"Dec 14, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Andrii Fedorov IV",email:"andrii.fedorov@gmail.com",spent:"2,200.90",phone:"+380725678901",address:"Dmytrivska, Bldg. 20, Apt. 104",register_date:"Dec 15, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Anna Mykhailenko II",email:"anna.mykhailenko@gmail.com",spent:"3,650.25",phone:"+380716739011",address:"Velyka Zhytomyrska, Bldg. 11, Apt. 33",register_date:"Dec 16, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Vitalii Sokolov III",email:"vitalii.sokolov@gmail.com",spent:"2,300.50",phone:"+380717860126",address:"Artema, Bldg. 45, Apt. 92",register_date:"Dec 17, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Alina Ponomarenko II",email:"alina.ponomarenko@gmail.com",spent:"2,800.75",phone:"+380718201237",address:"Peremohy Ave, Bldg. 35, Apt. 77",register_date:"Dec 18, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Kyrylo Kovalenko II",email:"kyrylo.kovalenko@gmail.com",spent:"3,900.00",phone:"+380719012365",address:"Bohdana Khmelnytskoho, Bldg. 20, Apt. 49",register_date:"Dec 19, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Yuliia Borysenko IV",email:"yuliia.borysenko@gmail.com",spent:"2,600.25",phone:"+380120129456",address:"Sviatoshynska, Bldg. 7, Apt. 84",register_date:"Dec 20, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Yaroslav Kovalchuk IV",email:"yaroslav.kovalchuk@gmail.com",spent:"2,150.50",phone:"+380721207567",address:"Henerala Vatutina, Bldg. 24, Apt. 56",register_date:"Dec 21, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Oksana Petrova II",email:"oksana.petrova@gmail.com",spent:"3,300.75",phone:"+380722335618",address:"Poltavskyi Shliakh, Bldg. 6, Apt. 28",register_date:"Dec 22, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Roman Petrenko IV",email:"roman.petrenko@gmail.com",spent:"2,150.25",phone:"+380703456989",address:"Druzhby Narodiv, Bldg. 39, Apt. 79",register_date:"Dec 23, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Nadiia Tkachenko III",email:"nadiia.tkachenko@gmail.com",spent:"2,300.00",phone:"+380720367890",address:"Peremohy Ave, Bldg. 81, Apt. 15",register_date:"Dec 24, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Oleksandr Andriievskyi IV",email:"oleksandr.andriievskyi@gmail.com",spent:"2,500.90",phone:"+380725278900",address:"Pobedy Ave, Bldg. 30, Apt. 64",register_date:"Dec 25, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Nina Hryshchenko III",email:"nina.hryshchenko@gmail.com",spent:"3,100.25",phone:"+380726779010",address:"Artema, Bldg. 18, Apt. 43",register_date:"Dec 26, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Serhii Mykhailenko IV",email:"serhii.mykhailenko@gmail.com",spent:"2,800.50",phone:"+380727890177",address:"Sviatoshynska, Bldg. 8, Apt. 117",register_date:"Dec 27, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Mariia Sokolova IV",email:"mariia.sokolova@gmail.com",spent:"2,350.75",phone:"+380728991034",address:"Bohdana Khmelnytskoho, Bldg. 30, Apt. 78",register_date:"Dec 28, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Nadia Ivanova III",email:"nadia.ivanova@gmail.com",spent:"2,300.50",phone:"+380802654324",address:"Obolon, Bldg. 16, Apt. 45",register_date:"Aug 1, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Petro Kovalchuk II",email:"petro.kovalchuk@gmail.com",spent:"3,450.75",phone:"+380802345278",address:"Lva Tolstoho, Bldg. 32, Apt. 91",register_date:"Aug 2, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Oleksiy Shevchenko II",email:"oleksiy.shevchenko@gmail.com",spent:"1,980.25",phone:"+380003456784",address:"Kharkivske Shose, Bldg. 11, Apt. 24",register_date:"Aug 3, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Iryna Melnyk IV IV",email:"iryna.melnyk@gmail.com",spent:"2,150.00",phone:"+380824567890",address:"Peremohy Ave, Bldg. 52, Apt. 81",register_date:"Aug 4, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Yuriy Hrytsenko IV",email:"yuriy.hrytsenko@gmail.com",spent:"2,750.90",phone:"+380705671901",address:"Saksahanskoho, Bldg. 9, Apt. 63",register_date:"Aug 5, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Anastasiia Boyko II",email:"anastasiia.boyko@gmail.com",spent:"3,200.25",phone:"+380506787012",address:"Chervonoarmiyska, Bldg. 40, Apt. 22",register_date:"Aug 6, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Dmytro Svyatogor II IV",email:"dmytro.svyatogor@gmail.com",spent:"2,900.50",phone:"+380707590143",address:"Hlybochytska, Bldg. 65, Apt. 134",register_date:"Aug 7, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Vira Symonenko IV",email:"vira.symonenko@gmail.com",spent:"2,450.75",phone:"+380708401284",address:"Zhytomyrska, Bldg. 19, Apt. 178",register_date:"Aug 8, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Serhii Romanchuk II",email:"serhii.romanchuk@gmail.com",spent:"3,750.00",phone:"+380109012375",address:"Reitarska, Bldg. 11, Apt. 92",register_date:"Aug 9, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Marina Kovalenko IV",email:"marina.kovalenko@gmail.com",spent:"2,850.25",phone:"+380110143456",address:"Bogdana Khmelnytskoho, Bldg. 51, Apt. 70",register_date:"Aug 10, 2023"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Mykola Voloshyn III",email:"mykola.voloshyn@gmail.com",spent:"2,300.50",phone:"+380761234567",address:"Kyivska, Bldg. 3, Apt. 15",register_date:"Aug 11, 2023"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Yuliia Ponomarenko II",email:"yuliia.ponomarenko@gmail.com",spent:"3,450.75",phone:"+380712375978",address:"Henerala Vatutina, Bldg. 17, Apt. 29",register_date:"Aug 12, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Taras Tkachenko II III",email:"taras.tkachenko@gmail.com",spent:"1,980.25",phone:"+380773456489",address:"Naukova, Bldg. 29, Apt. 50",register_date:"Aug 13, 2023"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Nataliia Andriichuk II",email:"nataliia.andriichuk@gmail.com",spent:"2,150.00",phone:"+380714560830",address:"Pobedy Ave, Bldg. 17, Apt. 77",register_date:"Aug 14, 2023"},{image:"https://i.imgur.com/1As0akH.png1",name:"Nadia Ivanova IV II",email:"nadia.ivanova@gmail.com",spent:"2,890.50",phone:"+380707652321",address:"Obolon, Bldg. 14, Apt. 45",register_date:"Feb 15, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Petro Kovalchuk III",email:"petro.kovalchuk@gmail.com",spent:"3,610.75",phone:"+380102245678",address:"Lva Tolstoho, Bldg. 33, Apt. 91",register_date:"Feb 16, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Oleksiy Shevchenko IV",email:"oleksiy.shevchenko@gmail.com",spent:"2,200.25",phone:"+380703056749",address:"Kharkivske Shose, Bldg. 15, Apt. 24",register_date:"Feb 17, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Iryna Melnyk IV III",email:"iryna.melnyk@gmail.com",spent:"2,350.00",phone:"+380704567490",address:"Peremohy Ave, Bldg. 54, Apt. 81",register_date:"Feb 18, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Yuriy Hrytsenko IV II",email:"yuriy.hrytsenko@gmail.com",spent:"2,850.90",phone:"+380706678901",address:"Saksahanskoho, Bldg. 14, Apt. 63",register_date:"Feb 19, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Anastasiia Boyko III",email:"anastasiia.boyko@gmail.com",spent:"3,100.25",phone:"+380706786012",address:"Chervonoarmiyska, Bldg. 36, Apt. 22",register_date:"Feb 20, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Dmytro Svyatogor IV",email:"dmytro.svyatogor@gmail.com",spent:"2,700.50",phone:"+380777895123",address:"Hlybochytska, Bldg. 64, Apt. 134",register_date:"Feb 21, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Vira Symonenko III",email:"vira.symonenko@gmail.com",spent:"2,250.75",phone:"+380708908231",address:"Zhytomyrska, Bldg. 20, Apt. 178",register_date:"Feb 22, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Serhii Romanchuk IV",email:"serhii.romanchuk@gmail.com",spent:"3,850.00",phone:"+380705012325",address:"Reitarska, Bldg. 14, Apt. 92",register_date:"Feb 23, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Marina Kovalenko IV II",email:"marina.kovalenko@gmail.com",spent:"2,850.25",phone:"+380760124456",address:"Bogdana Khmelnytskoho, Bldg. 45, Apt. 70",register_date:"Mar 10, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Mykola Voloshyn II",email:"mykola.voloshyn@gmail.com",spent:"2,300.50",phone:"+380711214587",address:"Kyivska, Bldg. 0, Apt. 15",register_date:"Mar 11, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Yuliia Ponomarenko III",email:"yuliia.ponomarenko@gmail.com",spent:"3,450.75",phone:"+380712345818",address:"Henerala Vatutina, Bldg. 16, Apt. 29",register_date:"Mar 12, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Taras Tkachenko II II",email:"taras.tkachenko@gmail.com",spent:"1,980.25",phone:"+380713096789",address:"Naukova, Bldg. 31, Apt. 50",register_date:"Mar 13, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Nataliia Andriichuk III",email:"nataliia.andriichuk@gmail.com",spent:"2,150.00",phone:"+380715567896",address:"Pobedy Ave, Bldg. 14, Apt. 77",register_date:"Mar 14, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Anatolii Zhukov",email:"anatolii.zhukov@gmail.com",spent:"3,200.50",phone:"+380715674901",address:"Sviatoshynska, Bldg. 3, Apt. 18",register_date:"Mar 15, 2024"},{image:"https://i.imgur.com/1As0akH.png1",name:"Olena Symchuk",email:"olena.symchuk@gmail.com",spent:"2,450.75",phone:"+380719789012",address:"Volodymyrska, Bldg. 40, Apt. 62",register_date:"Mar 16, 2024"},{image:"https://i.imgur.com/UYCE7Rr.png",name:"Viktoriya Kovalchuk",email:"viktoryia.kovalchuk@gmail.com",spent:"3,600.25",phone:"+380717890103",address:"Khreshchatyk, Bldg. 26, Apt. 85",register_date:"Mar 17, 2024"},{image:"https://i.imgur.com/hz6bZkb.png",name:"Andrii Petrenko",email:"andrii.petrenko@gmail.com",spent:"2,900.00",phone:"+380718901254",address:"Obolon, Bldg. 14, Apt. 43",register_date:"Mar 18, 2024"},{image:"https://i.imgur.com/FHMKqK5.png",name:"Oksana Hordiyenko",email:"oksana.hordiyenko@gmail.com",spent:"3,100.50",phone:"+380719014345",address:"Peremohy Ave, Bldg. 43, Apt. 76",register_date:"Mar 19, 2024"}],M=[{name:"Qonto billing",amount:"-49.88",type:"Expense"},{amount:"+249.88",name:"Cruip.com Market Ltd 70 Wilson St London",type:"Income"},{name:"Notion Labs Inc",amount:"+99.99",type:"Income"},{name:"Market Cap Ltd",amount:"+1,200.88",type:"Income"},{name:"App.com Market Ltd 70 Wilson St London",amount:"+99.99",type:"Error"},{amount:"-49.88",name:"App.com Market Ltd 70 Wilson St London",type:"Expense"},{name:"Qonto billing",amount:"-49.88",type:"Expense"},{amount:"+249.88",name:"Cruip.com Market Ltd 70 Wilson St London",type:"Income"},{name:"Notion Labs Inc",amount:"+99.99",type:"Income"},{name:"Market Cap Ltd",amount:"+1,200.88",type:"Income"},{name:"App.com Market Ltd 70 Wilson St London",amount:"+99.99",type:"Income"},{amount:"-49.88",name:"App.com Market Ltd 70 Wilson St London",type:"Expense"}],K=()=>e.jsxs(I,{children:[e.jsxs(l,{className:"first",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(c,{colSpan:"6",children:"Recent Customers"})})}),e.jsx("tbody",{children:e.jsxs(h,{children:[e.jsxs("tr",{children:[e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Email"}),e.jsx(o,{children:"Spent"}),e.jsx(o,{children:"Phone"}),e.jsx(o,{children:"Address"}),e.jsx(o,{children:"Register Date"})]}),_.map((i,s)=>e.jsxs("tr",{children:[e.jsxs(k,{children:[e.jsx("img",{src:i.image,alt:"user"}),e.jsx("span",{children:i.name})]}),e.jsx("td",{children:i.email}),e.jsx("td",{children:i.spent}),e.jsx("td",{children:i.phone}),e.jsx("td",{children:i.address}),e.jsx("td",{children:i.register_date})]},s))]})})]}),e.jsxs(l,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(c,{colSpan:"3",children:"Income/Expenses"})})}),e.jsx("tbody",{children:e.jsxs(h,{children:[e.jsx("tr",{children:e.jsx(o,{colSpan:"3",children:"Today"})}),M.map((i,s)=>e.jsxs("tr",{children:[e.jsx(k,{children:e.jsx(y,{prop:i.type,$variant:i.type})}),e.jsx(B,{children:i.name}),e.jsx("td",{style:{color:`${i.type}`=="Expense"?"#E85050":`${i.type}`=="Income"?"#59B17A":"#1D1E21",textDecoration:`${i.type}`=="Error"&&"line-through"},children:i.amount})]},s))]})})]})]}),j=()=>{const i=window.innerWidth;return e.jsxs(A,{children:[i>1439&&e.jsx(u,{}),e.jsx(b,{}),e.jsx(K,{})]})};function S(){return e.jsx(j,{})}export{S as default};
