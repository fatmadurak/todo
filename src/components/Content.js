import React from 'react'

function Content() {
  return (
    <section clasName="main">
		<input clasName="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul clasName="todo-list">
			<li clasName="completed">
				<div clasName="view">
					<input clasName="toggle" type="checkbox" />
					<label>Learn JavaScript</label>
					<button clasName="destroy"></button>
				</div>
			</li>
			<li>
				<div clasName="view">
					<input clasName="toggle" type="checkbox" />
					<label>Learn React</label>
					<button clasName="destroy"></button>
				</div>
			</li>
			<li>
				<div clasName="view">
					<input clasName="toggle" type="checkbox" />
					<label>Have a life!</label>
					<button clasName="destroy"></button>
				</div>
			</li>
		</ul>
	</section>
  )
}

export default Content