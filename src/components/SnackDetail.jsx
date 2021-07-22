import React, { Component } from "react";
import "../css/MyDetail.css";
import { Radar } from "react-chartjs-2";
import Masonry from "react-masonry-css";

import Comment from "./Comment";
import axios from "axios";
import Content from "./Content";

class SnackDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      allComment: [],
      breakpointColumnsObj: {
        default: 4,
        1660: 4,
        1310: 4,
        1025: 3,
      },
      radarData: {
        labels: ["재구매", "포만감", "맛", "가성비", "창의성"],
        datasets: [
          {
            label: "과자 점수",
            backgroundColor: "rgba(248, 18, 18, 0.5)",
            fill: true,
            radius: 10,
            pointHoverRadius: 5,
            data: [3, 4, 5, 3, 2],
          },
        ],
      },
    };

    this.onAllComments = this.onAllComments.bind(this);
  }

  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }

    // 처음 과자 댓글 들고오기
    axios
      .get(`http://localhost:8080/comment/${this.props.location.state.id}`)
      .then((res) => {
        this.setState({ comment: res.data.comment });

        this.setState({
          allComment: res.data.map((comment) => {
            return (
              <Comment
                id={comment.id}
                key={comment.id}
                userName={comment.userName}
                content={comment.content}
              />
            );
          }),
        });
      });
  }

  onAllComments(comment) {
    const { allComment } = this.state;

    this.setState({
      allComment: [
        ...allComment,
        <Comment
          id={comment.id}
          key={comment.id}
          userName={comment.userName}
          content={comment.content}
        />,
      ],
    });

    console.log("업데이트된 댓글들", this.state.allComment);
  }

  render() {
    let ipsum =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

    const { state } = this.props.location;

    console.log(state);

    if (state === undefined) {
      return null;
    } else {
      return (
        <div className="detail">
          <h1>{state.snack.category}</h1>
          <hr />
          <div className="detail-main">
            <div className="detail-main-img-div">
              <img
                id={state.id}
                src={`http://localhost:3000/images/${state.path}`}
                alt="snack"
              />
            </div>

            <div className="detail-main-info-div">
              <h2>{state.id}</h2>
              <hr />
              <div className="detail-main-info-tag">
                <div className="tag">#바삭함</div>
                <div className="tag">#촉촉함</div>
                <div className="tag">#순한맛</div>
                <div className="tag">#소금맛</div>
              </div>
              <Radar
                options={{
                  scale: {
                    gridLines: {
                      color: "#rgba(255, 60, 0, 0.1)",
                      lineWidth: 2,
                    },
                    angleLines: {
                      display: false,
                    },
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 5,
                      stepSize: 1,
                    },
                    backgroundColor: "rgba(255, 255, 255)",
                    pointLabels: {
                      fontSize: 50,
                      fontColor: "red",
                    },
                  },
                }}
                data={this.state.radarData}
              />
            </div>
          </div>

          <div className="detail-ingredient">
            <div className="detail-ingredient-box">
              <div className="ingredient-title">원재료명</div>
              <div className="detail-ingredient-info">{ipsum}</div>
            </div>
            <div className="detail-ingredient-box">
              <div className="ingredient-title">영양정보</div>
              <div className="detail-ingredient-info">{ipsum}</div>
            </div>
            <div className="detail-ingredient-box">
              <div className="ingredient-title">주의성분</div>
              <div className="detail-ingredient-info">{ipsum}</div>
            </div>
          </div>

          <div className="detail-comment-input">
            {/* <input
              className="commet-text"
              type="text"
              placeholder="이 과자 맛있음? 댓글 ㄱㄱ"
              value={this.state.content}
              onChange={this.onChange}
            />
            <input
              className="commet-btn"
              type="button"
              value="댓글 달기"
              onClick={this.onClick}
            /> */}
            <Content onAllComments={this.onAllComments} snackId={state.id} />
          </div>

          <div className="detail-comment-div">
            <Masonry
              breakpointCols={this.state.breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {this.state.allComment}
            </Masonry>
          </div>
        </div>
      );
    }
  }
}

export default SnackDetail;
