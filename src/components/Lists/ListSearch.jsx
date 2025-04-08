import { Input, Pagination, Select, SelectItem } from "@heroui/react"
import { HiOutlineSearch } from "react-icons/hi";
import { ListItem } from './ListItem';
import { useState } from "react";
import { useStrings } from "../../hooks/useStrings";

export const ListSearch = ({ items, section }) => {

  const [data, setData] = useState(items);
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage, setItemsPerPage] = useState(5); 
  const { removeAccents } = useStrings();

  const perPage = [
    { key: '5', label: "5" },
    { key: '10', label: "10" },
    { key: '20', label: "20" },
    { key: items?.length || 'Todos', label: 'Todos' }
  ];

  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePagination = (page) => {
    setCurrentPage(page)
  }
  const handlePerPage = (val) => {
    const value = parseInt(val.target.value);
    if (!isNaN(value)) {
      setItemsPerPage(value);
      setCurrentPage(1);
    }
  }
  const handleSearchRealTime = (e) => {
    const searchTerm = removeAccents(e.target.value.toLowerCase());
    const filteredData = items.filter(item => 
      removeAccents(item.name.toLowerCase()).includes(searchTerm) || 
      removeAccents(`iglesia ${item?.church?.toLowerCase()}`).includes(searchTerm) || 
      removeAccents(item?.phone?.toLowerCase())?.includes(searchTerm)
    )

    if (e.target.value.toLowerCase() == '') {
      setData(items)
    } else {
      setData(filteredData);
      setCurrentPage(1);
    }
  }
  return (
    <>
        <Select
          className="max-w-[100px] block my-5 float-right"
          items={perPage}
          label="Por página"
          defaultSelectedKeys={[`5`]}
          onChange={handlePerPage}
        >
          {
            perPage.map((item, index) => (
              <SelectItem key={`${item.key}`}>{item.label}</SelectItem>
            ))
          }
        </Select>
        {currentItems?.length > 0 && (<span className="my-5 block">Mostrando { itemsPerPage } de { data?.length ||  0}</span>)}
           {`Current Items: ${currentItems?.length}`}
        <Input
        placeholder="Busca aquí"
        className='mt-5 border border-indigo-500 input-search bg-white'
        size='lg'
        variant='bordered'
        radius='none'
        startContent={ <HiOutlineSearch  /> }
        type="search"
        onChange={handleSearchRealTime}/>

        <div className="mt-10 gap-5 flex flex-col">
            {
             (currentItems?.length > 0) ? currentItems?.map((item, index) => (
                <ListItem key={`list-item-${index}`} name={item.name} church={item.church}  phone={item.phone} section={section}/>
              )) : `No hay ningún registro.`
            }
            <div className="m-auto flex justify-center mt-10">
                <Pagination initialPage={currentPage} total={totalPages} onChange={handlePagination} />
            </div>
        </div> 
    </>
  )
}