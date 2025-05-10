import styled from 'styled-components';
import { borderGradientStylesCSS, boxShadow } from 'src/styles';
import { BorderGradientContainer } from 'src/styles/ui/BorderGradient';

const Styled = {
  Pagination: styled(BorderGradientContainer)`
    align-self: center;
  `,

  PaginationWrapper: styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
    gap: .75rem;
    padding: 1rem;
    ${boxShadow};

    .swiper-button-prev,
    .swiper-button-next,
    .swiper-pagination {
      position: static;
      margin: 0!important;
    }

    .button-wrapper {
      ${borderGradientStylesCSS}
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.darkGray};
      border-radius: 5000px;
      width: 32px;
      height: 32px;
      ${boxShadow};

      &::after {
        color: ${({ theme }) => theme.colors.softGray};
        font-size: 12px;
        font-weight: 900;
      }
    }

    .swiper-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .75rem;
    }

    .swiper-pagination-bullet {
      margin: 0;
      background: ${({ theme }) => theme.colors.white};
      opacity: 0.2;
      width: 16px;
      height: 16px;
    }

    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.colors.softGray};
      opacity: 1;
    }

    @media (min-width: 375px) {
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  `,
};

export default function TestimonialsPagination() {
  return (
    <Styled.Pagination>
      <Styled.PaginationWrapper>
        <div className="button-wrapper">
          <button className="swiper-button-prev" />
        </div>
        <div className="swiper-pagination" />
        <div className="button-wrapper">
          <button className="swiper-button-next" />
        </div>
      </Styled.PaginationWrapper>
    </Styled.Pagination>
  );
}
