package ObjectRepository;

public class ResourceXPath {

	public static String url = "https://www.amazon.in/";
	public static String dropdownALL = "//*[@id='searchDropdownBox']";
	public static String searchFIELD = "//*[@id='twotabsearchtextbox']";
	public static String searchBUTTON = "//*[@id='nav-search']/form/div[2]/div/input";
	public static String searchCOUNT = "//*[contains(text(),'results for')]";
	public static String bookNAME = "//*[@class='a-size-medium a-color-base a-text-normal' and contains(text(), '";
	public static String targetBookNAME = "//span[starts-with(@id,'productTitle')]";
	public static String targetBookAuthorNAME = "//*[@id='bylineInfo']/span/a";
	public static String targetBookPRICE = "//*[@id='soldByThirdParty']/span";
	
	public static String prepareBookname(String bknm) {
		String prepstr = bookNAME+bknm+"')]";
		return prepstr;
	}
}
