import React, { useEffect, useState } from "react";
import "../Css/Subjects.css";
import video from "../Images/video.png";
import { MdAddCircle } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import swal from 'sweetalert'; 
import ReactPaginate from "react-paginate";


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
    const [color, setColor] = useState("");
    const [file, setFile] = useState("");
    const [Topics, setTopics] = useState(['Select', 'green', 'Yellow', 'Red', 'blue', 'orange', 'pink', 'yellow',"black","white","purple"])
    //pegination
    const [users, setUsers] = useState(Adata.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };
      const displayUsers = users
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user ,index ) =>  {
        return ( 
                <div className="col-xl-3 col-lg-6 col-md-5 col-sm-10 Subject_show offset-1 mb-3 " key={index + 1}  style={{borderLeft:"10px solid",borderColor:user.color}}>
                    <div className="row mt-3 text-left" >
                        <div className="col-12"><b>{user.subject}</b></div>
                        <div className="col-12 mt-3"><p>Topice : 30 </p></div>
                        <div className="col-12 mt-3"><GrEdit type="button" className="Icons" /> <BsTrash type="button" className="Icons" onClick={() => deleteSubject(index)} />
                            <GrView type="button" className="Icons" data-toggle="modal" data-target="#exampleModalCenter" />
                        </div>
                        <div class="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Image View</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body text-center">
                                        {file ? <img style={{ width: 400, height: 500 }} src={file} /> : <img class="IMG" src="https://image.shutterstock.com/image-photo/portrait-schoolchild-looking-above-glasses-260nw-1168623613.jpg"></img>}
                                        {console.log("images inside the file", file)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    })
    const handelSubmit = (e) => {
        e.preventDefault();
        swal("Good job!", "Subject Added Successfuly!", "success");
        let subjects = {
            subject,
            color,
            file,
            description
        }
        console.log("data", subjects)
        setAdata([...Adata, subjects]);
        setSubject("");
        setDescription("");
        setColor("")
        setUsers([...Adata, subjects])
    }
    const handCancele = () => {
        swal("Good job!", "Added data cleared successfully!", "error");
        setSubject("");
        setDescription("");
        setColor("");
        setFile("");
    }
    useEffect(() => {
        localStorage.setItem('Adata', JSON.stringify(Adata))
        console.log(Adata)
    }, [Adata]);


    const deleteSubject = (id) => {
        swal("Good job!", "Subject Deleted successfully!", "success");
        const filteredBook = Adata.filter((element, index) => {
            return (index !== id)
            
        })
        setAdata(filteredBook);
        setUsers(filteredBook);
    }

    

    return (
        <>
            <div className="Main_component">
            
                <div className="container-fluid ">
                    <div className="row ml-5 pl-5">
                        <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 card_main card_main ">
                           <h2 className=" mt-5">Subject</h2>
                            
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 card_main text-center">
                            <img src={video} alt="img"></img>
                        </div>
                    </div>

                    <div className="row pl-5 pr-4">
                        <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 card_main ">
                            
                            <div className="row" >
                                {displayUsers}
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                           
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 card_Add">
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
                                    <div className="col-xl-12 pt-5  m-0">
                                        <select className="dropdowne" required value={color} onChange={(e) => setColor(e.target.value)} >Set Expire Date
                                            {Topics.map((item, index) => {
                                                return (
                                                    <option className="p-3 ">{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-xl-12 mt-4"><div className="form">
                                        <input type="file" required accept="image/*" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} />
                                        <label className="label-name">
                                            <span className="content-name"></span>
                                        </label>
                                    </div>



                                        <div className="col-xl-12 mt-5"><div className="form">
                                            <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />
                                            <label className="label-name">
                                                <span className="content-name">Description</span>
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 p-5"><button type="reset" className="btn btn-danger" onClick={handCancele}>cancel</button></div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 p-5"><button type="submit" className="btn btn-info "> Add </button></div>

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