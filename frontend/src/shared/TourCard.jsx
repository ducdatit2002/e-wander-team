.tour__img img {
    width        : 100%;
    border-radius: 5px 5px 0 0;
 }
 
 .card {
    border    : none !important;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
 }
 
 .tour__img {
    position: relative;
 }
 
 .tour__img span {
    position     : absolute;
    bottom       : 0;
    right        : 0;
    width        : max-content;
    height       : max-content;
    z-index      : 10;
    background   : var(--primary-color);
    color        : #fff;
    padding      : 0.1rem 0.3rem;
    border-radius: 3px 0 0 0;
 }
 
 .card__top span i {
    color: var(--secondary-color);
 }
 
 .tour__rating {
    font-size: 0.8rem;
    color    : var(--text-color);
 }
 
 .tour__location {
    color      : var(--heading-color);
    font-weight: 500;
    font-size  : 1rem;
 }
 
 .tour__rating i,
 .tour__location i {
    font-size: 1rem;
 }
 
 .tour__title {
    margin-top: 1rem;
    font-size : 1rem;
    cursor    : pointer;
 }
 
 .tour__title a {
    text-decoration: none;
    color          : var(--heading-color);
    transition     : 0.3s;
 }
 
 .tour__title a:hover {
    color: var(--secondary-color);
 }
 
 .card__bottom h5 {
    color      : var(--secondary-color);
    font-size  : 1rem;
    font-weight: 700;
 }
 
 .card__bottom h5 span {
    font-weight: 500;
    color      : var(--text-color);
    font-size  : 1rem;
 }
 
 
 .booking__btn {
    background-color: var(--secondary-color) !important;
    padding         : 0.6rem;
    transition      : 0.5s;
    cursor          : pointer;
    border          : none;
    border-radius   : 14px 0 14px 0;
    font-style      : italic;
    text-decoration: none;
 }
 
 .booking__btn:hover {
    transform: scale(1.1);
    color    : purple;
 }
 
 /* =============== RESPONSIVE ================ */
 @media only screen and (max-width: 576px) {
    .tour__title {
       font-size: 1rem;
    }
 
    .booking__btn a {
       font-size: 0.8rem;
    }
 
    .booking__btn {
       padding: 0.2rem 0.5rem !important;
    }
 
    .tour__location,
    .tour__rating {
       font-size: 0.8rem;
    }
 }