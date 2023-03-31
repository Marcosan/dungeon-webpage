import * as React from "react";
import './map.css'
import { ALL_PAGES } from "../../data/DungeonMap";
import { useSelector } from "react-redux";

export default function MapDungeon(props) {
	const currentPage = useSelector((state) => state.currentPage.value)
	return (
		<div className="contenct-map">
			{
				ALL_PAGES.map((iValue, i) => {
					return iValue.map((jValue, j) => {
						console.log(jValue);
						if (!jValue) {
							return null;
						}
						let isCurrent = false;
						if (currentPage.current === jValue.current) {
							isCurrent = true;
						}
						return(
							<div key={i + j + '_square'} uk-tooltip={`title: ${jValue?.title}`}
							className={`square ${isCurrent ? 'active-square' : ''}`}
							style={{
								gridColumn: `${j+1} / ${j+2}`,
								gridRow: `${i+1}`
							}}>
							</div>
						)
					})
				})
			}
		</div>
	);
}