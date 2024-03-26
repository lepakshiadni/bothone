import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ReactImg from "../../assets/react.png";
import FigmaImg from "../../assets/figma.png";
import AdobeImg from "../../assets/adobe.png";
import PythonImg from "../../assets/python.png";
import ProfileImg from "../../assets/profileTrainer.png";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import  UserAvatar from '../../assets/UserAvatar.png'
import "../../styles/TrainersList.css";
import LocationIcon from "../../assets/LocationIcon.svg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import Axios from 'axios'
const Trainers = ({ trainerIndex }) => {
  const baseUrl = localStorage.getItem('baseUrl')
  console.log("baseUrl", baseUrl)
  const navigate = useNavigate();
  const location = useLocation();
  const [selecteduser, setSelecteduser] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [trainerDetails, setTrainerDetails] = useState([])

  useEffect(() => {
    Axios.get(`${baseUrl}/trainer/getAllTrainerDetails`)
      .then((resp) => {
        setTrainerDetails(resp.data?.trainerDetails)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const trainerData = [
    {
      id: 1,
      name: "manoj",
      profile: ProfileImg,
      location: "Mysore",
      designation: "UX UI Developer",
      date: 11,
      experience: 10,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
      about:
        "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
      skillDescription:
        "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
      skills: [
        { name: "React", imgSrc: ReactImg, percentage: 100 },
        { name: "Python", imgSrc: PythonImg, percentage: 50 },
        { name: "Adobe", imgSrc: AdobeImg, percentage: 40 },
        { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
      ],
      reviews: [
        {
          user: "Wills",
          profileImage: ProfileImg,
          companyName: "techzoo",
          rating: 4,
          comment:
            "One of the best trainers! Perfect person to teach, they know all the things.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 3,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 1,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
      ],
      calculateAverageRating: function () {
        let totalRating = 0;
        const numberOfUsers = this.reviews.length;

        this.reviews.forEach((review) => {
          totalRating += review.rating;
        });

        this.averageRating =
          numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
      },
    },
    {
      id: 2,
      name: "Kowshik",
      profile: ProfileImg,
      location: "Mysore",
      designation: "UX UI Developer",
      date: 11,
      experience: 10,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
      about:
        "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
      skillDescription:
        "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
      skills: [
        { name: "React", imgSrc: ReactImg, percentage: 100 },
        { name: "Python", imgSrc: PythonImg, percentage: 50 },
        { name: "Adobe", imgSrc: AdobeImg, percentage: 40 },
        { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
      ],
      reviews: [
        {
          user: "Wills",
          profileImage: ProfileImg,
          companyName: "techzoo",
          rating: 4,
          comment:
            "One of the best trainers! Perfect person to teach, they know all the things.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 3,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 1,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
      ],
      calculateAverageRating: function () {
        let totalRating = 0;
        const numberOfUsers = this.reviews.length;

        this.reviews.forEach((review) => {
          totalRating += review.rating;
        });

        this.averageRating =
          numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
      },
    },
    {
      id: 1,
      name: "manoj",
      profile: ProfileImg,
      location: "Mysore",
      designation: "UX UI Developer",
      date: 11,
      experience: 10,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
      about:
        "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
      skillDescription:
        "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
      skills: [
        { name: "React", imgSrc: ReactImg, percentage: 100 },
        { name: "Python", imgSrc: PythonImg, percentage: 50 },
        { name: "Adobe", imgSrc: AdobeImg, percentage: 40 },
        { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
      ],
      reviews: [
        {
          user: "Wills",
          profileImage: ProfileImg,
          companyName: "techzoo",
          rating: 4,
          comment:
            "One of the best trainers! Perfect person to teach, they know all the things.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 3,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 1,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
      ],
      calculateAverageRating: function () {
        let totalRating = 0;
        const numberOfUsers = this.reviews.length;

        this.reviews.forEach((review) => {
          totalRating += review.rating;
        });

        this.averageRating =
          numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
      },
    },
    {
      id: 2,
      name: "Kowshik",
      profile: ProfileImg,
      location: "Mysore",
      designation: "UX UI Developer",
      date: 11,
      experience: 10,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
      about:
        "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
      skillDescription:
        "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
      skills: [
        { name: "React", imgSrc: ReactImg, percentage: 100 },
        { name: "Python", imgSrc: PythonImg, percentage: 50 },
        { name: "Adobe", imgSrc: AdobeImg, percentage: 40 },
        { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
      ],
      reviews: [
        {
          user: "Wills",
          profileImage: ProfileImg,
          companyName: "techzoo",
          rating: 4,
          comment:
            "One of the best trainers! Perfect person to teach, they know all the things.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 3,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 1,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
      ],
      calculateAverageRating: function () {
        let totalRating = 0;
        const numberOfUsers = this.reviews.length;

        this.reviews.forEach((review) => {
          totalRating += review.rating;
        });

        this.averageRating =
          numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
      },
    },
    {
      id: 1,
      name: "manoj",
      profile: ProfileImg,
      location: "Mysore",
      designation: "UX UI Developer",
      date: 11,
      experience: 10,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
      about:
        "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
      skillDescription:
        "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
      skills: [
        { name: "React", imgSrc: ReactImg, percentage: 100 },
        { name: "Python", imgSrc: PythonImg, percentage: 50 },
        { name: "Adobe", imgSrc: AdobeImg, percentage: 40 },
        { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
      ],
      reviews: [
        {
          user: "Wills",
          profileImage: ProfileImg,
          companyName: "techzoo",
          rating: 4,
          comment:
            "One of the best trainers! Perfect person to teach, they know all the things.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 3,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 1,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
      ],
      calculateAverageRating: function () {
        let totalRating = 0;
        const numberOfUsers = this.reviews.length;

        this.reviews.forEach((review) => {
          totalRating += review.rating;
        });

        this.averageRating =
          numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
      },
    },
    {
      id: 2,
      name: "Kowshik",
      profile: ProfileImg,
      location: "Mysore",
      designation: "UX UI Developer",
      date: 11,
      experience: 10,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
      about:
        "A passionate and experienced trainer with expertise in UI/UX design and frontend development.",
      skillDescription:
        "I am Kowshik, a dedicated UI/ UX Developer and Trainer.With a keen eye for design and a commitment to education, I am on a mission to share my expertise with aspiring designers.",
      skills: [
        { name: "React", imgSrc: ReactImg, percentage: 100 },
        { name: "Python", imgSrc: PythonImg, percentage: 50 },
        { name: "Adobe", imgSrc: AdobeImg, percentage: 40 },
        { name: "Figma", imgSrc: FigmaImg, percentage: 70 },
      ],
      reviews: [
        {
          user: "Wills",
          profileImage: ProfileImg,
          companyName: "techzoo",
          rating: 4,
          comment:
            "One of the best trainers! Perfect person to teach, they know all the things.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 3,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 1,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
        {
          user: "Sarah",
          profileImage: ProfileImg,
          companyName: "sarah_doe",
          rating: 5,
          comment:
            "Great learning experience. The trainer is knowledgeable and explains concepts clearly.",
        },
      ],
      calculateAverageRating: function () {
        let totalRating = 0;
        const numberOfUsers = this.reviews.length;

        this.reviews.forEach((review) => {
          totalRating += review.rating;
        });

        this.averageRating =
          numberOfUsers > 0 ? totalRating / numberOfUsers : 0;
      },
    },
  ];
  // trainerData[0].calculateAverageRating();
  // trainerData[1].calculateAverageRating();

  const [skillValues, setSkillValues] = useState();

  const findObjectById = (trainerDetails, selecteduser) => {
    return trainerDetails.find((obj) => obj.id === selecteduser);
  };

  // const foundObject = findObjectById(trainerDetails, selecteduser);
  // if (foundObject) {
  //   console.log("Object found:", foundObject);
  // } else {
  //   console.log("Object with id", selecteduser, "not found");
  // }
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRendered(true);

      setSkillValues((prevValues) => ({
        ...prevValues,
      }));
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  let menuRef = useRef();

  // const handleIconClick = () => {
  //   setIsSelected(!isSelected);
  // };
  // const handlenavigation = () => {
  //   if (location.pathname === "/employerDashboard/trainerlist") {
  //     navigate(`/employerDashboard/trainerlist/trainerlistprofile`);
  //   }
  // };
  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  // const seletedUserHandler = (trainer) => {
  //   console.log('trainerDetails', trainer)
  //   setSelecteduser(trainer)

  // }
  console.log('selectedUser', selecteduser)
  return (
    <>
      <div
        className="trainers-list"
      >
        {trainerDetails?.map((trainer, index) => {
          // console.log('trainer',trainer)
          return (

            <>
              <div>
                <Link to={`/employerDashboard/trainerlist/trainerlistprofile/${trainer?._id}`}>
                  <div>
                    <div
                      key={index}
                      className={`trainer-card ${hoveredIndex === index ? "hovered" : ""
                        }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="card-face card-front">
                        <div>
                          {
                            trainer?.basicInfo?.profileImg ?
                              <img
                                src={trainer?.basicInfo?.profileImg}
                                alt={`Profile of ${trainer?.fullName}`}
                                className="profile-img"
                              />
                              :
                              <div className="flex justify-center items-center bg-[#2676c2] w-[120px] h-[130px] rounded-[20%]">
                                <span className="capitalize text-4xl">{trainer?.fullName[0]}</span>
                              </div>
                          }
                        </div>
                        <div style={{ marginTop: "5px", textAlign: "center" }}>
                          <h3
                            style={{
                              color: "#2676C2",
                              fontSize: "1rem",
                              fontWeight: "500",
                            }}
                          >
                            {trainer?.basicInfo?.firstName ? trainer?.basicInfo?.firstName : trainer?.fullName}
                          </h3>
                          <p
                            style={{
                              color: "#6A6A6A",
                              fontSize: " 0.875rem",
                              fontWeight: "400",
                            }}
                          >
                            {trainer?.basicInfo?.designation}
                          </p>
                          <Stack
                            spacing={1}
                            sx={{ width: "6rem", height: "0.95363rem" }}
                            direction="row"
                            alignItems="center"
                          >
                            <Rating
                              name={`rating-${index}`}
                              value={trainer.star}
                              precision={1}
                              readOnly
                              sx={{
                                color: "#FFDE30",
                                "& .MuiRating-iconFilled": {
                                  color: "#FFDE30",
                                },
                                "& .MuiRating-iconEmpty": {
                                  borderColor: "#FFDE30",
                                },
                              }}
                            />
                          </Stack>
                        </div>
                        <div className="image-row">
                          {trainer?.skills?.slice(0, 4)?.map(({ name, image }) => {
                            // console.log(items[0])
                            return (
                              <>
                                <div className="  ">
                                  {
                                    image ?
                                      <img className="w-[30px] h-[30px] " src={image} alt="" />

                                      :
                                      null
                                    // <span className="flex justify-center items-center w-[30px] h-[30px] text-black bg-slate-500 rounded-full">{name[0]}</span>

                                  }

                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                      <div className="card-face card-back">
                        <div className="card-back-top">
                          <div className="card-back-image">
                            {
                              trainer?.basicInfo?.profileImg ?
                                <img
                                  src={trainer?.basicInfo?.profileImg}
                                  alt={`Profile of ${trainer?.fullName}`}
                                  className="profile-img-back"
                                />
                                :
                                <div className="flex justify-center items-center bg-[#2676c2]  h-[91px] w-[91px]  rounded-[20%]">
                                  <span className="capitalize text-4xl">{trainer?.fullName[0]}</span>
                                  {/* <img  className =" "alt="" src={UserAvatar}/> */}
                                </div>
                            }
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src={LocationIcon}
                                style={{ height: "0.9rem", color: "#2676C2" }}
                                alt=""
                              />
                              <span
                                style={{
                                  fontSize: "0.8rem",
                                  fontWeight: "400",
                                  color: "#6A6A6A",
                                }}
                              >
                                {" "}
                                {trainer?.basicInfo?.location}
                              </span>
                            </div>
                          </div>
                          <div className="card-back-content">
                            <h3 className="card-back-name">
                            {trainer?.basicInfo?.firstName ? trainer?.basicInfo?.firstName : trainer?.fullName}
                            </h3>
                            <p className="card-back-domain">
                              {trainer?.basicInfo?.designation}
                            </p>
                            <h4 className="card-back-exp flex justify-end items-center">
                              <p>{trainer?.experience?.experience} Years</p>
                            </h4>
                            <Stack
                              spacing={1}
                              sx={{
                                width: "6rem",
                                height: "0.95363rem",
                                marginTop: "0.31rem",
                                marginLeft: "1.11rem",
                              }}
                              direction="row"
                              alignItems="center"
                            >
                              <Rating
                                name={`rating-${index}`}
                                value={trainer.star}
                                precision={1}
                                readOnly
                                sx={{
                                  color: "#FFDE30", // Default color for all stars (grey border for empty stars)
                                  "& .MuiRating-iconFilled": {
                                    color: "#FFDE30", // Filled stars will be yellow
                                  },
                                  "& .MuiRating-iconEmpty": {
                                    borderColor: "#FFDE30", // Outline color for empty stars
                                  },
                                }}
                              />
                            </Stack>
                            <h4 className="session-list ">
                              <span className="session-list-span">
                                +{trainer.trainingSession} Training Session
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className="slider-container-parent h-[124px]">
                          {trainer?.skills?.slice(0, 4)?.map((val, index) => {
                            return (
                              
                              <div key={index} className="slider-container-child">
                                
                                <img src={val.image} alt="" className="w-5 h-5" />
                                <input
                                  className="relative rounded-[5px]]"
                                  type="range"
                                  min="0"
                                  max="15"
                                  value={val.range}
                                />
                                <span className="slider-span">
                                  {val.range} yrs
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        <p className="trainer-available flex justify-center items-center">
                          <span>Avail On {trainer?.contactInfo?.availableDate.slice(0,10)}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Trainers;
