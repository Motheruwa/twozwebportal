import React, { useContext, useEffect, useState } from 'react'
import { AlertContext } from '../../context/AlertContext';
import axios from 'axios';
import ModalForm from '../../modal/Modal';
import { Button } from 'antd';
import { BACKENDURL } from '../../helper/Urls';
import NewsTable from '../../components/tables/news/NewsTable';
import NewNewsForm from '../../components/forms/news/NewNewsForm';

const NewsPage = () => {
  const {openNotification} = useContext(AlertContext);

  const [vacancyData,setvacancyData]=useState([])
  const [loading,setLoading]=useState(false)

  const getvacancyData=async()=>{
    setLoading(true)
    try {
      const res = await axios.get(`${BACKENDURL}/news/all`);
      setLoading (false);
      console.log(res.data)
      setvacancyData(res.data.all)
    } catch (error) {
      openNotification('error', error.response.data.message, 3, 'red');
      setLoading (false);
    }
  }

  useEffect(()=>{
    getvacancyData()
  },[])


  const [modalOpen, setModalOpen] = useState (false);

  return (
    <div>
      <div style={{height: '50px',display:'flex',gap:'10px'}}>
        <Button type="primary" onClick={() => setModalOpen (true)}>
          Add New News
        </Button>
        <Button type='default' onClick={getvacancyData} loading={loading}>
          Reload
        </Button>
        <ModalForm
          open={modalOpen}
          close={() => setModalOpen (false)}
          title={'New News Form'}
          content={<NewNewsForm reload={()=>getvacancyData()} openModalFun={(e) => setModalOpen (e)}/>}
        />
      </div>
      <NewsTable loading={loading} reload={()=>getvacancyData()} vacancyData={vacancyData}/>
    </div>
  )
}

export default NewsPage