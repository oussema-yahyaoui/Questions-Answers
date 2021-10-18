import React, { Component } from "react";
import axios from "axios";

class QandA extends Component {
  constructor() {
    super();
    this.state = {
      resulat: [],
      product_id: 40339,

      // view:false
    };
    this.getresulat = this.getresulat.bind(this);
  }

  // changerview(){
  //   this.setState({view:true})
  // }

  componentDidMount() {
    this.getresulat();
  }

  getresulat() {
    var config = {
      method: "get",
      url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=40339",
      headers: {
        Authorization: "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",
      },
    };

    axios(config)
      .then((response) => {
        // console.log(response);
        this.setState({ resulat: response.data.results });
        console.log(this.state.resulat);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {    
    return (
      this.state.resulat.map((question,i)=> 
      <div key={i}>
       
      <div className=" min-h-screen   grid grid-cols-7  justify-center  ">
        <div className="col-span-1 "></div>
        <div className=" col-span-5  grid grid-rows-6">
          <div className=" row-span-1 px-80 ">
            QUESTIONS & ANSWERS
            <div className="flex items-center justify-center">
              <div className="flex border-2 ">
                <input
                  className="text text-bold"
                  type="text"
                  className="px-5 py-2 w-80"
                  placeholder="HAVE QUESTION?SERACH FOR ANSWER..."
                />
                <button className="flex items-center justify-center px-2 border-l">
                  <svg
                    className="w-20 h-6 text-black-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="row-span-1 ">
            <div className=" grid grid-cols-4 ">
              <div className="col-span-2 flex flex-row space-x-1">
                <p className="text-1xl text-black font-bold">Q:</p>
                <p>Who what which when where why where how?</p>
              </div>
              <div className="col-span-2 ">
                <span className="text-xs font-thin space-x-1.5">
                  {" "}
                  Helpful? Yes(24) |{" "}
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  Add Answer
                </span>
              </div>
            </div>
            <div className=" grid grid-rows-2 space-x-1.5">
              <div className="row-span-1 flex flex-row space-x-1.5">
                <p className=" text-1xl text-black font-bold ">A:</p>
                <span />
                Icing macaroon bear claw jelly beans chocolate cake.Cookie oat
                cake chocolate halvah jelly cake cotton candy soufflé
                topping.Jujubes topping cake gummies lemon drops.
              </div>
              <div className="row-span-1">
                <span className="text-xs font-thin space-x-1.5">
                  by User1337,May 1,2019
                </span>
                <span className="text-xs font-thin space-x-1.5">
                  | Helpful?
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  {" "}
                  Yes{" "}
                </span>
                <span className="no-underline text-xs font-thin space-x-1.5">
                  (0)
                </span>{" "}
                <span className="underline text-xs font-thin space-x-1.5">
                  | Report
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-1 ">
            <div className=" grid grid-cols-4 space-x-1">
              <div className="col-span-2 flex flex-row space-x-1">
                <p className="text-1xl font-bold ">Q:</p>
                <p>Who what which when where why where how?</p>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-thin space-x-1.5">
                  {" "}
                  Helpful? Yes(24) |{" "}
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  Add Answer
                </span>
              </div>
            </div>
            <div className=" grid grid-rows-2 space-x-1">
              <div className="row-span-1 flex flex-row space-x-1">
                <p className="text-1xl font-bold ">A:</p>
                <span />
                Tootsie rool pudding jelly-o jujubes jelly-o wafer biscuit
                danish ice cream.Cootton candy sweet roll candy.
              </div>
              <div className="row-span-1">
                <span className="text-xs font-thin space-x-1.5">
                  by User1337,May 1,2019
                </span>
                <span className="text-xs font-thin space-x-1.5">
                  | Helpful?
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  {" "}
                  Yes{" "}
                </span>
                <span className="no-underline text-xs font-thin space-x-1.5">
                  (0)
                </span>{" "}
                <span className="underline text-xs font-thin space-x-1.5">
                  | Report
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-1 ">
            <div className=" grid grid-cols-4 space-x-1">
              <div className="col-span-2 flex flex-row space-x-1">
                <p className="text-1xl font-bold">Q:</p>
                <p>whomst whatever whence wherefore?</p>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-thin space-x-1.5">
                  {" "}
                  Helpful? Yes(25) |{" "}
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  Add Answer
                </span>
              </div>
            </div>
            <div className=" grid grid-rows-2 space-x-1 ">
              <div className="row-span-1 flex flex-row space-x-1">
                <p className="text-1xl font-bold space-x-1">A:</p>
                <span />
                Tootsie rool pudding jelly-o jujubes jelly-o wafer biscuit
                danish ice cream.Cootton candy sweet roll candy.
              </div>
              <div className="row-span-1">
                <span className="text-xs font-thin space-x-1.5">
                  by User1337,May 1,2019
                </span>
                <span className="text-xs font-thin space-x-1.5">
                  | Helpful?
                </span>
                <span className="underline text-xs font-thin space-x-1.5">
                  {" "}
                  Yes{" "}
                </span>
                <span className="no-underline text-xs font-thin space-x-1.5">
                  (0)
                </span>{" "}
                <span className="underline text-xs font-thin space-x-1.5">
                  | Report
                </span>
              </div>
            </div>
          </div>
          <div className="row-span-1 ">
            <div className="h-30 bg-white-500 grid  grid-cols-7 ">
              <div className=" col-span-4 ">
                Yes,as you see in these photos.
                <div className="flex gap-3">
                  <img className="w-14 h-12" />
                  <img className="w-14 h-12 " />
                  <img className="w-14 h-12 " />
                </div>
                <div className=" col-span-2">
                  <span className="text-xs font-thin space-x-1.5">
                    by User1337-
                    <span className="text-xs font-bold space-x-1">Seller</span>
                    ,May 1,2019
                  </span>
                  <span className="text-xs font-thin space-x-1.5">
                    | Helpful?
                  </span>
                  <span className="underline text-xs font-thin space-x-1.5">
                    {" "}
                    Yes{" "}
                  </span>
                  <span className="no-underline text-xs font-thin space-x-1.5">
                    (0)
                  </span>{" "}
                  <span className="underline text-xs font-thin space-x-1.5">
                    | Report
                  </span>
                </div>
              </div>
            </div>
            <br />
            <div className="text-xs font-bold">LOAD MORE ANSWERS</div>
          </div>
          <div className="row-span-1 ">
            <div className="grid grid-cols-7">
              <div className="col-span-2"></div>

              <div className="col-span-4 flex flex-row gap-1">
                <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent  m-8">
                  MORE ANSWERED QUESTIONS
                </button>

                <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent  m-8">
                  ADD A QUESTION +{" "}
                </button>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>

        <div className="col-span-1 "></div>
      </div>
      </div>
      )
    )
    
    
  }
  
}

export default QandA;
// return (
//   <div>
//     <div className="h-64 grid grid-rows-7 min-h-screen ">
//       <div className="row-start-1 row-end-2">
//         <div className="text-1xl text-center row-start-1 row-end-2 font-bold ">
//           QUESTIONS & ANSWERS
//         </div>

//         <div className="flex items-center justify-center">
//           <div className="flex border-2 ">
//             <input
//               className="text text-bold"
//               type="text"
//               className="px-4 py-2 w-80"
//               placeholder="HAVE QUESTION?SERACH FOR ANSWER..."
//             />
//             <button className="flex items-center justify-center px-2 border-l">
//               <svg
//                 className="w-20 h-6 text-black-600"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className=" row-start-2 row-end-3">
//         <div className="row-span-1 grid grid-cols-7">
//           <div className="col-span-1"></div>

//           <div className=" flex flex-row col-span-4 ">
//             <p className="text-1xl font-bold">Q:</p>
//             <p>Who what which when where why where how?</p>
//           </div>
//           <div className="col-span-2">Helpful? Yes(25) | Add Answer</div>
//         </div>
//         <div>
//           <div className="row-span-1  grid grid-cols-7">
//             <div className="col-span-1"></div>
//             <div className="flex flex-row col-span-4">
//               <p className="text-1xl font-bold">A:</p>
//               Icing macaroon bear claw jelly beans chocolate cake.Cookie oat
//               cake chocolate halvah jelly cake cotton candy soufflé
//               topping.Jujubes topping cake gummies lemon drops.
//             </div>
//           </div>

//           <div className="row-span-1   grid grid-cols-7">
//             <div className="col-span-1"></div>
//             <div className="col-span-4">
//               by User1337,May 1,2019 | Helpful? Yes (0) | Report
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row-start-3 row-end-4">
//         <div className="row-span-1 grid grid-cols-7">
//           <div className="col-span-1"></div>
//           <div className="col-span-4 flex ">
//             <p className="text-1xl font-bold">Q:</p>
//             <p>whomst whatever whence wherefore?</p>
//           </div>
//           <div className="col-span-2">Helpful? Yes(25) | Add Answer</div>
//         </div>

//         <div>
//           <div className="col-span-4  grid grid-cols-7">
//             <div className="col-span-1"></div>
//             <div className="col-span-5">
//               <div className=" flex flex-row">
//                 <p className="text-1xl font-bold">A:</p>
//                 Tootsie rool pudding jelly-o jujubes jelly-o wafer biscuit
//                 danish ice cream.Cootton candy sweet roll candy.
//               </div>
//               <div>by User1337,May 1,2019 | Helpful? Yes (0) | Report</div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="h-30 bg-white-500 row-span-1 grid grid-rows-4 grid-cols-7 ">
//             <div className="col-span-1"></div>
//             <div className="row-span-1 col-span-4 ">
//               Yes,as you see in these photos.
//               <div className="row-span-1 flex gap-3">
//                 <img className="w-14 h-12" />
//                 <img className="w-14 h-12 " />
//                 <img className="w-14 h-12 " />
//               </div>
//               <div className="row-span-1 col-span-2">
//                 by User1337-Seller,May 1,2019 | Helpful? Yes (0) | Report
//               </div>
//             </div>

//             <div className="row-span-1 text-bold">LOAD MORE ANSWERS</div>
//           </div>
//         </div>
//         <div className="grid grid-cols-7">
//           <div className="col-span-2"></div>

//           <div className="col-span-4 flex flex-row gap-1">
//             <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent  m-8">
//               MORE ANSWERED QUESTIONS
//             </button>

//             <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent  m-8">
//               ADD A QUESTION +{" "}
//             </button>
//           </div>
//           <div className="col-span-1"></div>
//         </div>
//       </div>

//     </div>
//   </div>
// );
