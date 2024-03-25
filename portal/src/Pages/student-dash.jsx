import "./student-dash.css";

const StuDash = () => {
  return (
    <div className="student-dashboard-container">
      <div className="help">
        {/* <svg
          width="85"
          height="84"
          viewBox="0 0 85 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.87088"
            y="0.265625"
            width="83.375"
            height="83.375"
            rx="20.8438"
            fill="url(#paint0_linear_10_159)"
          />
          <path
            d="M69.2271 39.6017L65.7532 36.1277C65.6725 36.0471 65.5768 35.9831 65.4715 35.9394C65.3661 35.8958 65.2532 35.8733 65.1391 35.8733C65.0251 35.8733 64.9121 35.8958 64.8068 35.9394C64.7014 35.9831 64.6057 36.0471 64.5251 36.1277L61.0511 39.6017C60.9704 39.6823 60.9064 39.778 60.8628 39.8834C60.8191 39.9887 60.7967 40.1017 60.7967 40.2157V48.9006C60.7967 49.0147 60.8191 49.1276 60.8627 49.233C60.9064 49.3384 60.9703 49.4341 61.051 49.5148C61.1317 49.5954 61.2274 49.6594 61.3328 49.7031C61.4382 49.7467 61.5511 49.7691 61.6652 49.7691H68.6131C68.7272 49.7691 68.8401 49.7467 68.9455 49.7031C69.0509 49.6594 69.1466 49.5954 69.2273 49.5148C69.3079 49.4341 69.3719 49.3384 69.4155 49.233C69.4592 49.1276 69.4816 49.0147 69.4816 48.9006V40.2157C69.4816 40.1017 69.4591 39.9887 69.4155 39.8834C69.3718 39.778 69.3078 39.6823 69.2271 39.6017Z"
            fill="white"
          />
          <path
            d="M53.8488 28.9254H27.7941C27.68 28.9253 27.5671 28.9478 27.4617 28.9914C27.3563 29.035 27.2606 29.099 27.1799 29.1797C27.0993 29.2603 27.0353 29.3561 26.9916 29.4615C26.948 29.5668 26.9256 29.6798 26.9256 29.7938V42.8212C26.9256 42.9865 26.9727 43.1484 27.0615 43.2878C27.1503 43.4272 27.277 43.5384 27.4268 43.6083L40.4542 49.6877C40.5692 49.7413 40.6945 49.7691 40.8214 49.7691C40.9483 49.7691 41.0737 49.7413 41.1887 49.6877L54.216 43.6083C54.3658 43.5384 54.4926 43.4272 54.5814 43.2878C54.6702 43.1484 54.7173 42.9865 54.7173 42.8212V29.7938C54.7173 29.6798 54.6949 29.5668 54.6512 29.4615C54.6076 29.3561 54.5436 29.2603 54.463 29.1797C54.3823 29.099 54.2866 29.035 54.1812 28.9914C54.0758 28.9478 53.9628 28.9253 53.8488 28.9254Z"
            fill="white"
          />
          <path
            d="M53.8488 28.9254H27.7941C27.68 28.9253 27.5671 28.9478 27.4617 28.9914C27.3563 29.035 27.2606 29.099 27.1799 29.1797C27.0993 29.2603 27.0353 29.3561 26.9916 29.4615C26.948 29.5668 26.9256 29.6798 26.9256 29.7938V38.1637L40.4542 44.4768C40.5692 44.5304 40.6945 44.5582 40.8214 44.5582C40.9483 44.5582 41.0737 44.5304 41.1887 44.4768L54.7173 38.1636V29.7938C54.7173 29.6798 54.6949 29.5668 54.6512 29.4615C54.6076 29.3561 54.5436 29.2603 54.463 29.1797C54.3823 29.099 54.2866 29.035 54.1812 28.9914C54.0758 28.9478 53.9628 28.9253 53.8488 28.9254Z"
            fill="white"
          />
          <path
            d="M65.5047 25.532L41.187 14.2416C41.0724 14.1888 40.9477 14.1615 40.8215 14.1615C40.6952 14.1615 40.5705 14.1888 40.4559 14.2416L16.1382 25.532C15.988 25.6017 15.8608 25.7129 15.7717 25.8525C15.6826 25.9921 15.6353 26.1543 15.6353 26.3199C15.6353 26.4855 15.6826 26.6477 15.7717 26.7873C15.8608 26.9269 15.988 27.0381 16.1382 27.1078L40.4559 38.3982C40.5705 38.4513 40.6952 38.4788 40.8215 38.4788C40.9477 38.4788 41.0724 38.4513 41.187 38.3982L65.5047 27.1078C65.6549 27.0381 65.7821 26.9269 65.8712 26.7873C65.9603 26.6477 66.0077 26.4855 66.0077 26.3199C66.0077 26.1543 65.9603 25.9921 65.8712 25.8525C65.7821 25.7129 65.6549 25.6017 65.5047 25.532Z"
            fill="white"
          />
          <path
            d="M65.1391 34.1363C65.0251 34.1363 64.9121 34.1139 64.8067 34.0703C64.7014 34.0266 64.6056 33.9627 64.525 33.882C64.4443 33.8014 64.3803 33.7056 64.3367 33.6002C64.2931 33.4948 64.2706 33.3819 64.2706 33.2678V27.1884H40.8214C40.5911 27.1884 40.3702 27.0969 40.2073 26.934C40.0444 26.7711 39.9529 26.5502 39.9529 26.3199C39.9529 26.0896 40.0444 25.8687 40.2073 25.7058C40.3702 25.5429 40.5911 25.4514 40.8214 25.4514H65.1391C65.2532 25.4514 65.3661 25.4738 65.4715 25.5175C65.5769 25.5611 65.6727 25.6251 65.7533 25.7057C65.834 25.7864 65.8979 25.8821 65.9416 25.9875C65.9852 26.0929 66.0077 26.2058 66.0076 26.3199V33.2678C66.0077 33.3819 65.9852 33.4948 65.9416 33.6002C65.8979 33.7056 65.834 33.8014 65.7533 33.882C65.6727 33.9627 65.5769 34.0266 65.4715 34.0703C65.3661 34.1139 65.2532 34.1363 65.1391 34.1363Z"
            fill="white"
          />
          <path
            d="M65.1391 39.3472C67.0577 39.3472 68.6131 37.7919 68.6131 35.8733C68.6131 33.9547 67.0577 32.3993 65.1391 32.3993C63.2205 32.3993 61.6652 33.9547 61.6652 35.8733C61.6652 37.7919 63.2205 39.3472 65.1391 39.3472Z"
            fill="white"
          />
          <path
            d="M57.9941 66.2399C56.8308 65.9227 55.5858 63.067 55.5858 59.3225C55.5858 55.578 56.8308 52.7223 57.9941 52.4051C58.2078 52.3468 58.3911 52.209 58.5066 52.0199C58.6221 51.8309 58.661 51.6048 58.6153 51.388C58.5697 51.1713 58.4429 50.9801 58.261 50.8537C58.079 50.7273 57.8557 50.6752 57.6366 50.708L40.8214 53.2338L24.0008 50.7072L23.575 50.6461C23.5342 50.6403 23.4929 50.6375 23.4516 50.6376C20.9759 50.6376 19.1092 54.3711 19.1092 59.3225C19.1092 64.2739 20.9759 68.0074 23.4516 68.0074C23.4929 68.0075 23.5342 68.0047 23.575 67.9989L40.8214 65.4113L57.6365 67.9371C57.8556 67.9699 58.079 67.9178 58.2609 67.7913C58.4429 67.6649 58.5696 67.4738 58.6153 67.257C58.661 67.0402 58.6221 66.8142 58.5066 66.6251C58.3911 66.4361 58.2078 66.2982 57.9941 66.2399Z"
            fill="white"
          />
          <path
            d="M44.2954 51.5061H37.3475C36.8869 51.5066 36.4454 51.6898 36.1198 52.0154C35.7942 52.3411 35.611 52.7826 35.6105 53.2431V68.8759C35.6105 69.0178 35.6453 69.1576 35.7118 69.283C35.7784 69.4084 35.8746 69.5155 35.9921 69.5951C36.1097 69.6747 36.2449 69.7243 36.386 69.7395C36.5272 69.7547 36.6699 69.7352 36.8017 69.6825L40.8214 68.0744L44.8411 69.6825C44.973 69.7352 45.1157 69.7547 45.2568 69.7395C45.3979 69.7243 45.5331 69.6747 45.6507 69.5951C45.7682 69.5155 45.8645 69.4084 45.931 69.283C45.9975 69.1576 46.0323 69.0178 46.0323 68.8759V53.2431C46.0318 52.7826 45.8486 52.3411 45.523 52.0154C45.1974 51.6898 44.7559 51.5066 44.2954 51.5061Z"
            fill="white"
          />
          <path
            d="M58.1912 50.6376C58.1499 50.6375 58.1087 50.6403 58.0678 50.6461L57.642 50.7072C57.6066 50.7124 57.5714 50.7197 57.5369 50.7292C55.3652 51.3221 53.8488 54.8554 53.8488 59.3225C53.8488 63.7896 55.3652 67.323 57.5369 67.9158C57.5714 67.9253 57.6066 67.9326 57.642 67.9379L58.0678 67.9989C58.1087 68.0047 58.1499 68.0075 58.1912 68.0074C60.6669 68.0074 62.5337 64.2739 62.5337 59.3225C62.5337 54.3711 60.6669 50.6376 58.1912 50.6376Z"
            fill="white"
          />
          <path
            d="M56.4542 58.454H53.8691C53.8562 58.7393 53.8488 59.0286 53.8488 59.3225C53.8488 63.7896 55.3652 67.3229 57.5369 67.9158C57.5714 67.9253 57.6066 67.9326 57.642 67.9378L58.0678 67.9989C58.1087 68.0047 58.1499 68.0075 58.1912 68.0074C58.4881 68.0063 58.7823 67.9515 59.0597 67.8456V61.0595C59.0589 60.3687 58.7842 59.7064 58.2957 59.218C57.8073 58.7295 57.145 58.4548 56.4542 58.454Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_159"
              x1="42.5584"
              y1="0.265625"
              x2="42.5584"
              y2="83.6406"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#925FE2" />
              <stop offset="1" stop-color="#7042C0" />
            </linearGradient>
          </defs>
        </svg> */}
        Help
      </div>
      <div className="main">Main</div>
      <div className="feedback">Feedback</div>
      <div className="calendar">Calendar</div>
      <div className="objectives">Objectives</div>
      <div className="group-members">Group Members</div>
    </div>
  );
};

export default StuDash;