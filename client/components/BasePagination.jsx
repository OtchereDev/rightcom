import { Fragment } from 'react';

export default function Pagination({ pageCount, pageIndex, setPageIndex }) {
	let pagination = [];

	let pageCountSet = [];
	for (let i = 1; i <= pageCount; i++) {
		pageCountSet.push(i);
	}

	let finalIndexes = [];

	switch (pageCount > 3) {
		case true:
			switch (pageIndex) {
				case 1:
					//if on page 1, show Previous in front and Next at the end.
					finalIndexes = pageCountSet.slice(pageIndex - 1, pageIndex + 2);
					finalIndexes.unshift('Previous');
					finalIndexes.push('Next');
					break;

				//if on page 2, show Previous in front and Next at the end.
				case pageCountSet[1]:
					finalIndexes = pageCountSet.slice(0, pageIndex + 1);
					finalIndexes.unshift('Previous');
					finalIndexes.push('Next');
					break;

				//if on last but one page, show last 3 page numbers and put Previous in front and Next at the back
				case pageCountSet[pageCountSet.length - 2]:
					if (pageIndex === pageCountSet[pageCountSet.length - 2]) {
						finalIndexes = pageCountSet.slice(pageIndex - 2, pageIndex + 1);
						finalIndexes.unshift('Previous');
						finalIndexes.push('Next');
					}
					break;

				//if on last page, show Previous in front and Next at the end
				case pageCountSet[pageCountSet.length - 1]:
					finalIndexes = pageCountSet.slice(pageIndex - 3, pageIndex);
					finalIndexes.unshift('Previous');
					finalIndexes.push('Next');
					break;

				default:
					//if numbers in between, show one on each side as well as Previous in front and Next at the end
					finalIndexes = pageCountSet.slice(pageIndex - 2, pageIndex + 1);
					finalIndexes.unshift('Previous');
					finalIndexes.push('Next');
					break;
			}
			break;

		default:
			for (let i = 0; i <= pageCount + 1; i++) {
				pagination.push(
					<Fragment key={i}>
						{i === 0 && (
							<li className="page-item disabled">
								<a className="page-link">Previous</a>
							</li>
						)}
						{i !== 0 && i !== pageCount + 1 && (
							<li
								className={`page-item${
									pageIndex === i ? ' active' : ''
								} aria-current="page"`}
							>
								<a
									className="page-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setPageIndex(i)}
								>
									{i}
								</a>
							</li>
						)}
						{i === pageCount + 1 && (
							<li className="page-item disabled">
								<a className="page-link">Next</a>
							</li>
						)}
					</Fragment>
				);
			}
			break;
	}

	finalIndexes.map((index) => {
		if (
			pageIndex === pageCount - 1 ||
			pageIndex === pageCount - 2 ||
			pageIndex === pageCount
		) {
			pagination.push(
				<Fragment key={index}>
					{index === 'Next' ? (
						<li className="page-item disabled">
							<a className="page-link">Next</a>
						</li>
					) : (
						<li
							className={`page-item${
								pageIndex === index ? ' active' : ''
							} aria-current="page"`}
						>
							{index === 'Previous' ? (
								<a
									className="page-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setPageIndex(pageIndex - 2)}
								>
									{index}
								</a>
							) : (
								<a
									className="page-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setPageIndex(index)}
								>
									{index}
								</a>
							)}
						</li>
					)}
				</Fragment>
			);
		} else if (
			pageIndex === pageIndex + 1 ||
			pageIndex === pageIndex + 2 ||
			pageIndex === pageIndex
		) {
			pagination.push(
				<Fragment key={index}>
					{index === 'Previous' ? (
						<li className="page-item disabled">
							<a className="page-link">Previous</a>
						</li>
					) : (
						<li
							className={`page-item${
								pageIndex === index ? ' active' : ''
							} aria-current="page"`}
						>
							{index === 'Next' ? (
								<a
									className="page-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setPageIndex(pageIndex + 2)}
								>
									{index}
								</a>
							) : (
								<a
									className="page-link"
									style={{ cursor: 'pointer' }}
									onClick={() => setPageIndex(index)}
								>
									{index}
								</a>
							)}
						</li>
					)}
				</Fragment>
			);
		} else {
			<h1>dsfsf</h1>;
		}
	});

	return (
		<nav aria-label="...">
			<ul className="pagination">{pagination}</ul>
		</nav>
	);
}
