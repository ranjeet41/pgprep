import React, { useEffect, useState } from "react";
import "../Css/Subjects.css";
import video from "../Images/video.png";
import { MdAddCircle } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import PDFViewer from 'pdf-viewer-reactjs'


const getDatafromLS = () => {
    const adata = localStorage.getItem('Adata');
    if (adata) {
        return JSON.parse(adata);
    }
    else {
        return []
    }
}

const Subjects = () => {
    const [Adata, setAdata] = useState(getDatafromLS());
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");
    const [file, setFile] = useState("");
    const [Topics, setTopics] = useState(['Select', 'Topic :24', 'Topic :28', 'Topic :20', 'Topic :233', 'Topic :24', 'Topic :28', 'Topic :94',])

    const handelSubmit = (e) => {

        e.preventDefault();
        let subjects = {
            subject,
            topic,
            file,
            description
        }
        console.log("data", subjects)
        setAdata([...Adata, subjects]);
        setSubject("");
        setDescription("");
        setTopic("")

            (subject.length >= 3) ? setSubject(subject) : alert("plese fill proper data")

    }
    const handCancele = () => {
        setSubject("");
        setDescription("");
        setTopic("");
    }


    useEffect(() => {
        localStorage.setItem('Adata', JSON.stringify(Adata))
        console.log(Adata)
    }, [Adata]);

    const deleteSubject = (id) => {
        const filteredBook = Adata.filter((element, index) => {
            return (index !== id)
        })
        setAdata(filteredBook);
    }

    return (
        <>
            <div className="Main_component">
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 card_main card_main ">
                            <h2 className="text-left mt-5">Subject</h2>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 card_main">
                            <img src={video} alt="img"></img>
                        </div>
                    </div>



                    <div className="row m-3 pt-2">
                        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 card_main ">
                            <div className="row text-left" >

                                {Adata && Adata.length > 0 ? Adata.map((item, index) => {
                                    return (

                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 Subject_show offset-1 mb-3" key={index}>
                                            <div className="row mt-3 text-left" >
                                                <div className="col-12"><b>{item.subject}</b></div>
                                                <div className="col-12 mt-3"><p>{item.topic}</p></div>
                                                <div className="col-12 mt-3"><GrEdit type="button" className="Icons" /> <BsTrash type="button" className="Icons" onClick={() => deleteSubject(index)} />
                                                    <GrView type="button" className="Icons" /></div>
                                            </div>
                                        </div>

                                    )

                                }) : "no data found"

                                }
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 card_Add">
                            <div className="row justify-content-center p-3">
                                <div className="col-xl-12"><MdAddCircle style={{ fontSize: "50px" }} /></div>
                                <div className="col-xl-12">Add Subject</div>
                            </div>
                            <form onSubmit={handelSubmit} >
                                <div className="row justify-content-center p-3">
                                    <div className="col-xl-12">
                                        <div className="form" >
                                            <input type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                                            <label className="label-name">
                                                <span className="content-name"> Enter Subject Name</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 pt-5 pb-5 m-0">
                                        <select className="dropdowne" required value={topic} onChange={(e) => setTopic(e.target.value)} >Set Expire Date
                                            {Topics.map((item, index) => {
                                                return (
                                                    <option className="p-3 ">{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-xl-12 mb-5"><div className="form">
                                        <input type="file" required value={file} accept="image/*" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} />
                                        <label className="label-name">
                                            <span className="content-name"></span>
                                        </label>
                                    </div>
                                    


                                    <div className="col-xl-12"><div className="form">
                                        <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />
                                        <label className="label-name">
                                            <span className="content-name">Description</span>
                                        </label>
                                    </div>



                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-5"><button type="reset" className="btn btn-danger btn-lg" onClick={handCancele}>cancel</button>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-5"><button type="submit" className="btn btn-info btn-lg">Add</button>
                                    </div>
                                </div>
                                </div>
                               
                            </form>
                        </div>
                    </div>

                </div>
            </div>






        </>
    )
}
export default Subjects;