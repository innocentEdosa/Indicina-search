import ReactPaginate from 'react-paginate';
import clsx from 'clsx';
import ChevronLeft from 'components/Vectors/ChevronLeft';
import styles from './pagination.module.css';

const Pagination = ({
  pageCount = 10,
  nextLabel = <ChevronLeft className={styles.icon} />,
  previousLabel = <ChevronLeft className={clsx(styles.icon, styles.rightIcon)} />,
  pageRangeDisplayed = 2,
  marginPagesDisplayed = 2,
  breakLabel = '...',
  initialPage = 0,
}) => {
  return (
    <div>
      <ReactPaginate
        pageCount={pageCount}
        disableInitialCallback={true}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        breakLabel={breakLabel}
        pageClassName={styles.pageClassName}
        activeClassName={styles.activeClass}
        containerClassName={styles.container}
        activeLinkClassName={styles.activeLinkClassName}
        breakClassName={styles.breakClassName}
        previousLinkClassName={styles.nextPrevClassName}
        nextLinkClassName={styles.nextPrevClassName}
        initialPage={initialPage}
        breakLinkClassName={styles.breakLinkClassName}
        disabledClassName={styles.disabledNextPrevClassName}
      />
    </div>
  );
};

export default Pagination;
