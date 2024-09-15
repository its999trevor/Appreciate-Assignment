import React, { useEffect, useState } from 'react'
import faqsService from './api';


const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        getfaq();
    }, [])
    async function getfaq() {
        let res = await faqsService.getFaqs();
        setFaqs(res.data);
        console.log(res.data);
    }
    return (
        <div className='faq' style={{
            fontFamily: "Poppins",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <h3 style={{ color: "white" }}>FaQ section</h3>
{   faqs.map((arr)=>(


            <div key={arr.faqs_id} style={{ width: "376px", height: "160px", display: "flex", flexDirection: "row", borderRadius: "25px", marginBlockEnd:"10px", backgroundColor: "#EAEFEBCC" }}>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'start', paddingInlineStart: "40px", paddingBlockStart: "18px" }}>
                    <img src={"data:image/jpeg;base64,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"} style={{ width: "105px", height: "90px", borderRadius: "25px" }} />
                    <div>
                        <div style={{ fontSize: "16px", fontWeight: "700",marginBlockStart:"5px", marginInlineStart: "12px", color: "red" }}>{arr.name}</div>
                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: "column", marginInlineStart:"15px"}}>

                    <div style={{ fontSize: "16px", textAlign: "left", fontWeight: "700", color: "red",marginBlockStart:"20px",marginBlockEnd:"4px" }}>{arr.title}</div>


                    <div style={{ fontSize: "13px",lineHeight: "1.2", fontWeight: "700",maxWidth:"160px", textAlign: "left", color: "#0386D0" }}>{arr.description}</div>

                </div>
            </div>

))}


        </div>
    )
}

export default Faq