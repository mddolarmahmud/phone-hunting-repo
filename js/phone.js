const phoneDataDescription = async (textSearch = 13) => {
	const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${textSearch}`);
	const data = await res.json();
	// console.log(data);
	const phones = data.data;
	phoneData(phones);
};

const phoneData = (phones) => {
	const phoneListContainer = document.getElementById('phone-list-container');
	phoneListContainer.textContent = '';

	const showAllPhone = document.getElementById('show-all-phone');
	if (phones.length > 12) {
		showAllPhone.classList.remove('hidden');
	} else {
		showAllPhone.classList.add('hidden');
	}

	phones = phones.slice(0, 12);

	phones.forEach((phone) => {
		console.log(phone);
		const phoneCard = document.createElement('div');
		phoneCard.classList = `card card-compact w-96 bg-base-100 shadow-xl`;
		phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="phone" />
        </figure>
        <div class="card-body">
            <h2 class="card-title text-4xl flex justify-center">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button class="btn btn-error">Details</button>
            </div>
        </div>
     `;

		phoneListContainer.appendChild(phoneCard);
	});

	loddingSpinner(false);
};

const searchButton = () => {
	loddingSpinner(true);
	const inputAreaText = document.getElementById('input-text');
	const inputText = inputAreaText.value;
	console.log(inputText);
	phoneDataDescription(inputText);
};

const loddingSpinner = (isLoddin) => {
	const loadingSpinner = document.getElementById('loading-icon');
	if (isLoddin) {
		loadingSpinner.classList.remove('hidden');
	} else {
		loadingSpinner.classList.add('hidden');
	}
};
phoneDataDescription();
