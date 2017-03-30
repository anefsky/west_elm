app.component('imageSwapper', {
	controller: function(itemChoices) {
		this.itemChoices = itemChoices;
		this.mainImageIndex = 0;

		this.setMainImage = function(imgIndex) {
			this.mainImageIndex = imgIndex;
		}
	},
	template: `
		<div class="breadcrumbs">
			Home > Housekeeping > Aprons > Adult Aprons > 
			<span class="item">{{ $ctrl.itemChoices[$ctrl.mainImageIndex].description }}</span>
		</div>
		<img ng-src="assets/{{ $ctrl.itemChoices[$ctrl.mainImageIndex].largeImage }}" />
		<ul class="item-choices">
			<li ng-repeat="itemChoice in $ctrl.itemChoices" 
			ng-class="{ selected: $ctrl.mainImageIndex === $index }">
				<img ng-src="assets/{{ itemChoice.smallImage }}" 
					ng-click="$ctrl.setMainImage($index)" 
				/>
			</li>
		</ul>
	`
});